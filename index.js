

// Provide the URI in the right format
process.env.DB_URI = "mongodb://<user>:<password>@SERVER:PORT/DB-NAME"

// Following 2 are not needes as the user/password are part of the URI
//process.env.DB_USER = "set this up" /**provide the user id */
//process.env.DB_PASSWORD = "set this up" /**provide the password */

var express = require('express')
var bodyParser = require('body-parser')

var router = express.Router();
require('./api/v1/vacations')(router);

// Create the express app
app = express();
// Setup the body parser
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());//{type: '*/*'}));

// Setup the app to use the router
app.use(router);

// Start the listener
app.listen(3000);
console.log('Listening on 3000')

