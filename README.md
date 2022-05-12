# CommitCaptain

Integrated with the Github API and Twilio, this will text me if I haven't commited to Github by 11pm to that I can maintain my streak!

<p align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="50px" height="50px" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" width="50px" height="50px" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="nodejs" width="50px" height="50px" />
<img src="twilio-svg.svg" alt="nodejs" width="50px" height="50px" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="nodejs" width="50px" height="50px" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="nodejs" width="50px" height="50px" />
</p>

## To set it up for yourself:
1. Set up a Github OAuth token. 
	* see online documentation: [Github Docs](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)
	* Use this postman and enter your information from above [Postman](https://www.getpostman.com/collections/b51a774289cf0b1bdb22)
2. Create a Twilio account, and enable the free tier for your phone number. You only need to text yourself for this. [Twilio](https://www.twilio.com/)
3. Create a .env file at the root of the project.
4. Add the following Environment variables:
	1. GITHUB_OAUTH
		* Github oauth token from above
	2. TWILIO_ACCOUNT_SID
		* Get from twilio dashboard
	3. TWILIO_AUTH_TOKEN
		* Get fomr twilio dashboard
	4. FROM_PHONE_NUMBER
		* Set this to the phone number you get from Twilio
	5. TO_PHONE_NUMBER
		* This is the phone number you want the messages sent to. Make sure you verified it through Twilio.
3.  Run `docker-compose build` to build the  image, then host it (Heroku is a good option).
