import cron from "node-cron";
import env from "dotenv";
import {hasCommitted} from "./commits";
import {sendText} from "./sendMessage";
env.config()
cron.schedule('0,30 23 * * *', () =>  {
	checkCommit()
	console.log("cron");
});
console.log("Scheduled");
sendText("Server running")


const checkCommit = async () => {
	if (await hasCommitted()){
		console.log("Commited")
	} else {
		sendText("You haven't commited bro, get to it")
		console.log("Uncommited");
	}
}
