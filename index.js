
process.env.DB_URI = "set this "
process.env.DB_USER = "set this" /**provide the user id */
process.env.DB_PASSWORD = "set this" /**provide the password */

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

