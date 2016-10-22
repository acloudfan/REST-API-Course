/**
 * All database settings done in this file
 */

var mongoose = require('mongoose')
// Added the following line if you get the Mongoose/Promise deprecation warning
//mongoose.Promise = global.Promise;

// This environment property is used for getting the URI for MongoDB
var uri = process.env.DB_URI

// Connect
var options = {user:process.env.DB_USER, pass:process.env.DB_PASSWORD}
mongoose.connect(uri,options)

// Setup event listeners for the mongoose connections
mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error')
    console.log(err)
})
// events
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected')
})
mongoose.connection.on('open', function(){
    console.log('Mongoose connected')
})

// export the mongoose & db
exports.mongoose = mongoose;
exports.db = mongoose.connection;

