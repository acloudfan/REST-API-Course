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
        
        //1. fields
        var fields ={}
        if(req.query && req.query.fields !== undefined){
           fields =  createFields(req.query.fields)
        }

        //2. paginations
        var pagination = {limit:0, offset:0}
        if(req.query && req.query.limit !== undefined){
            // checks should be made that limit is a number
            pagination.limit = req.query.limit
        }
        if(req.query && req.query.offset !== undefined){
            // checks should be made that limit is a number
            pagination.offset = req.query.offset
        }

        //2. Setup options
        var options = {fields:fields, pagination:pagination}
        console.log(options)

        //3. execute the query
        var criteria = {}
        db.select(criteria, options, function(err,docs){
           
            if(err){
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                if(docs.length == 0){
                    res.status(404)
                }
                console.log("Retrieved hotels = %d",docs.length)

                // 4. Set the Link header - Left as an exercise for the students
                // Link : <url-to-next-page>; rel="next",
                //        <url-to-last-page>; rel="last"

                res.send(docs)
            }
        });
    });
}

// Utility function to create the JSON
// Simply parse the received fields and create a valid JSON object
// {field1:1, field2:1 ....}
function createFields(str){
    var arr = str.split(',')
    str = '{'
    for(var i=0; i < arr.length; i++){
        str += '\"' + arr[i] + '\":1'
        if(i < arr.length - 1) str += ","
    }
    str += '}'
    return JSON.parse(str)
}