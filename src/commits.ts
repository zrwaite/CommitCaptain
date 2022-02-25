import axios from "axios";
import env from "dotenv";
env.config();

const bearerToken = process.env.GITHUB_OAUTH||"";
const headers={"Authorization":bearerToken}

const hasCommitted = async () => {
	const repoApiUrl = "https://api.github.com/user/repos?per_page=100";
	const date = new Date();
	date.setHours(date.getHours() - 5);
	const reposResponse = await axios.get(repoApiUrl, {headers:headers});
	const repos = reposResponse.data; 
	const dateString = date.toISOString().split("T")[0]+"T05:00:00.000Z";
	console.log(dateString);
	for (let i=0; i<repos.length; i++) {
		const repo = repos[i];
        const commitApiUrl = "https://api.github.com/repos/zrwaite/" + repo.name + "/commits"
        const commitApiParams = {"author":"zrwaite","since": dateString}
		const commitResponse = await axios.get(commitApiUrl, {headers:headers, params:commitApiParams})
		const commits = commitResponse.data;
		if (commits.length !== 0) return true;
	}
	return false;
}


export {hasCommitted}