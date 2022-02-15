from flask import Flask, request
from commits import has_commited
from send_message import send_text
from dotenv import dotenv_values

app = Flask(__name__)

@app.route('/check_commit', methods = ['POST'])
def index():
	env = dotenv_values(".env") 
	if request.json['password'] != env["FLASK_PASSWORD"]:
		return "Invalid password", 400
	if has_commited():
		return "Commited"
	else:
		# send_text("You haven't commited bro, get to it")
		return "Uncommited"

if __name__ == '__main__':
	app.run(port = 5000)
