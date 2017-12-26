Created as part of the course on "REST API". 

Demonstrates the setting up of URI for the REST API

http://www.acloudfan.com/learn-REST-API


Following node practices defined here:
https://github.com/felixge/node-style-guide
https://blog.risingstack.com/node-js-best-practices/

Recent Change - 12/25/2017
*  Data updated for the testing.
** Instead of providing the User/Password now the URI for DB is used in the format:

mongodb://<user>:<password>@SERVER:PORT/DB-NAME

1. Clone this project on local file system
2. Pre-requisistes
      a. Understanding of node/npm
      b. An instance of MongoDB available either locally or remotely
      c. Import the data available in the repository

3. Run > npm install
      Deploys the packages
          express
          body-parser
          mongoose



Create from scratch
===================
1. create the project
2. git init
3. add .gitignore
4. npm init
5. npm install the packages (express,body-parser,mongoose)

6. create folder = models
