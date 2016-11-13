/**
 * Contains the definition of the API endpoints for vacation packages
 */
// As a best practice keep the resource name same as the file name
var RESOURCE_NAME = 'vacations';
var VERSION = 'v1';
var URI = '/' + VERSION + '/' + RESOURCE_NAME;

// Setup the vacations db
var db = require('../../db/vacations')

module.exports = function (router) {
    'use strict';

    // RETRIEVE all active vacation packages
    // Active = validTill >= Today's date

    //    /v1/vacations
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

    // Solution to the problem - Extend the vacations API to add RETRIEVAL of specific vacation package
    // v1/vacations/:id
    router.route(URI+"/:name").get(function (req, res, next) {
        var name = req.params.name || ''

        if (name === '') {
            res.sendStatus(400)
            return
        }
        console.log("GET Vacations : %s", name)
        //1. Setup query riteria for the active pacakages
        // In addition to the date check we need to look for a package with the name received in request
        // Added name: { $eq : name} to the criteria
        var criteria = { validTill: { $gte: new Date()}, name: { $eq : name} }

        //2. Select
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
                    // The returned error need to be defined better - in this example it is being left as is
                    res.status(400).send(err)
                } else {
                    res.send(saved)
                }
            });
        });
    }