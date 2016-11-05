/**
 * Defines the API for showing deals for ACME partner hotels
 */
var RESOURCE_NAME = 'hotels';
var VERSION = 'v1';
var URI = '/' + VERSION + '/' + RESOURCE_NAME; 

// Setup the vacations db
var db = require('../../db/hotels')

module.exports = function(router){
    'use strict';

    router.route(URI).get(function(req, res,next){
        console.log("GET Hotels")
        //1. Setup query riteria for the active pacakages
        var criteria = {}

        //2. fields
        var fieldsRequested = req.query.fields
        var fields = createFields(fieldsRequested)

        //3. execute the query
        db.select(criteria, fields, function(err,docs){
           
            if(err){
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                if(docs.length == 0){
                    res.status(404)
                }
                console.log("Retrieved hotels = %d",docs.length)
                res.send(docs)
            }
        });
    });
}

// Utility function to create the JSON
function createFields(str){
    var arr = str.split(',')
    str = '{'
    for(var i=0; i < arr.length; i++){
        str += '\"' + arr[i] + '\":1'
        if(i < arr.length - 1) str += ","
    }
    str += '}'

    console.log(str)
    return JSON.parse(str)
}