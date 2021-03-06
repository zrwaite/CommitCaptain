import {Twilio} from "twilio";
import env from "dotenv";
env.config()

const accountSid = process.env.TWILIO_ACCOUNT_SID || "";
const authToken = process.env.TWILIO_AUTH_TOKEN || "";
const fromPhone = process.env.FROM_PHONE_NUMBER || "";
const toPhone = process.env.TO_PHONE_NUMBER || "";

const client = new Twilio(accountSid, authToken);

const sendText = (body:string) => {
	client.messages
	.create({
		body: body,
		from: fromPhone,
		to: toPhone
	})
	.then(message => console.log(message.sid));
}

export {sendText}