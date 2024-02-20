# Group22Project1

## How to setup the project

0. Make sure you have nodejs and npm installed
1. Follow these steps https://github.com/antlr/antlr4-tools
2. run `npm install` to install dependencies (note: i think your node has to be at least version 14 for antlr to work)
3. (optional) run `npm run antlr` to transform the g4 files into js files (should not need to do unless you plan on updating something)
4. go to aws and make a free account (if you are from this group, i will put the secrets in the chat)
5. at the console home, click on your profile on the top right and click `Security Credentials`
6. create an access key and take note of it somewhere (i know this isn't best practice :p)
7. copy and paste the `.envexample` and rename it to `.env` and fill out the secrets
8. run `npm run dev` or `npm run start` to start the web server
9. enjoy
