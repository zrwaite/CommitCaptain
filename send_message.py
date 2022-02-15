from twilio.rest import Client
from dotenv import dotenv_values

def send_text(message):
	env = dotenv_values(".env")  
	account_sid = env['TWILIO_ACCOUNT_SID']
	auth_token = env['TWILIO_AUTH_TOKEN']
	client = Client(account_sid, auth_token)
	message = client.messages \
					.create(
						body=message,
						from_=env['FROM_PHONE_NUMBER'],
						to=env['ZAC_PHONE_NUMBER']
					)
