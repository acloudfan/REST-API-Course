process.env.DB_URI = "mongodb://ds059316.mlab.com:59316/acmetravel"
process.env.DB_USER = "***"
process.env.DB_PASSWORD = "***"

var express = require('express')
var bodyParser = require('body-parser')



var router = express.Router();

// setup the vacations api
require('./api/v1/vacations')(router);

// setup the hotels api
require('./api/v1/hotels')(router);

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

