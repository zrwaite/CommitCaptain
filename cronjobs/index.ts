import cron from "node-cron";
import axios from "axios";
import env from "dotenv";
env.config()
cron.schedule('0,30 23 * * *', () =>  {
	console.log("cron");
	sendRequest(); 
});
console.log("scheduled");

const sendRequest = async() => {
	try{
		console.log(process.env.FLASK_PASSWORD)
		const res = await axios.post('http://172.18.0.2:5000/check_commit', {password: process.env.FLASK_PASSWORD})
		console.log(res)
	} catch (e) {
		console.log("error", e);
	}
}