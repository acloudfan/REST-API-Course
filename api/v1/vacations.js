/**
 * Contains the definition of the API endpoints for vacation packages
 */
// As a best practice keep the resource name same as the file name
var RESOURCE_NAME = 'vacations';
var VERSION = 'v1';
var URI = '/' + VERSION + '/' + RESOURCE_NAME;

// Setup the vacations db
var db = require('../../db/vacations')
var apiErrors = require('../../util/errors')
var apiMessages = require('../../util/messages')

module.exports = function (router) {
    'use strict';

    // RETRIEVE all active vacation packages
    // Active = validTill >= Today's date

    //    /v1/Vacations
    router.route(URI).get(function (req, res, next) {
        console.log("GET Vacations")
        //1. Setup query riteria for the active pacakages
        var criteria = { validTill: { $gte: new Date() } }

        //2. execute the query
        db.select(criteria, function (err, docs) {

            if (err) {
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                if (docs.length == 0) {
                    res.status(404)
                }
                console.log("Retrieved vacations = %d", docs.length)
                res.send(docs)
            }
        });
    });

    // CREATE new vacation packages
    router.route(URI).post(function (req, res, next) {
        console.log("POST  Vacations")

        //1. Get the data
        var doc = req.body;

        //2. Call the insert method
        db.save(doc, function (err, saved) {
            if (err) {
                // Creates the error response
                // EARLIER it was >>>  res.status(400).send("err")
                var userError = processMongooseErrors(apiMessages.errors.API_MESSAGE_CREATE_FAILED, "POST", URI, err,{});
                res.setHeader('content-type', 'application/json')
                res.status(400).send(userError)
            } else {
                res.send(saved)
            }
        });
    });
}

/**
 * Converts the Mongoose validation errors to API specific errors
 */
var processMongooseErrors = function (message, method, endpoint, err,payload) {
    var errorList = []
    // Check for validation error
    if (err.name === 'ValidationError'){
        errorList = processValidationErrors(err)
    } else if(err.code == 11000){
        // it could be database error - 11000 is for duplicate key
        errorList.push(apiErrors.errors.PACKAGE_ALREADY_EXISTS)
    } else {
        var errUnknown = apiErrors.errors.UNKNOWN_ERROR
        errUnknown.payload = err
        errorList = [apiErrors.errors.UNKNOWN_ERROR]
    }
    return apiErrors.create(message, method, endpoint, errorList, payload)
}

/**
 * Converts Mongoose errors to API specific errors
 */
var processValidationErrors = function (err) {
    var errorList = []
    // Check if there is an issue with the Num of Nights
    if (err.errors.numberOfNights) {
        if (err.errors.numberOfNights.kind === apiErrors.kinds.MIN_ERROR 
        || err.errors.numberOfNights.kind  === apiErrors.kinds.MAX_ERROR 
        || err.errors.numberOfNights.kind === apiErrors.kinds.NUMBER_ERROR ) {
            errorList.push(apiErrors.errors.FORMAT_NUM_OF_NIGHTS)
        }
    }
    // Check if name of the package is missing
    if (err.errors.name) {
        if (err.errors.name.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_PACKAGE_NAME)
        }
    }

    // Check if description of the package is missing
    if (err.errors.description) {
        if (err.errors.description.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_PACKAGE_DESCRIPTION)
        }
    }

    return errorList;
}