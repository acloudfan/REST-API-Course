/**
 * Simple tests for all DB tests
 * 
 * Adds the test data to the collection
 */


// This is the old way which is not accepted by API anymore
// This is what you have seen in he video - please use the process.env.DB_URI
//process.env.DB_USER = "test";//
//process.env.DB_PASSWORD = "test";//acloudfan" 

// Provide the URI in the right format
process.env.DB_URI = "mongodb://<user>:<password>@SERVER:PORT/DB-NAME"

//Test#1  Insert the Vacation data
var db = require('../db/vacations')
var data = require('../data/vacations')


// Save a single row
db.save(data.SingleRow,function(err, saved){
    if(err){
        console.log("Failed single row save")
        //console.log(err)
        //process.exit(1)
    } else {
        console.log("Success - Save single row - %s",saved.name)
    }
});

// Save multiple rows
db.saveMany(data.MultipleRows,function(err, docs){
    if(err){
        console.log("Failed multiple row insert")
        //console.log(err)
        //process.exit(1)
    } else {
        console.log("Success - Multiple rows inserted - %d",docs.length)
    }
});

// Select vacations with some criteria
var selectCriteria = {validTill : {$gt : new Date()}}
db.select(selectCriteria, function(err, data){
    if(err){
        console.log("Failed to get vacations : %s",criteria)
        console.log(err)
    } else {
        console.log("Successfully selected %d documents for %s", data.length, JSON.stringify(selectCriteria))
    }
});

// Update the vacations
var updateCriteria = {name:'BAHAMAS1000'}
var doc = {description:'UPDATED Desc for TESTING'}
db.update(updateCriteria,doc,function(err, doc){
    if(err){
        console.log("Failed to get update")
        console.log(err)
    } else {
        console.log("Successfully updated with criteria %s", updateCriteria)
    }
})
