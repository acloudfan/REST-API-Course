/**
 * All database operations related to the vacations collection will reside in this file
 */
var model = require('../models/hotels')
var settings = require('../db/settings')


// CREATE multiple vacation packages
exports.saveMany = function (rows, callback) {
    model.Hotels.insertMany(rows, function (err, docs) {
        callback(err, docs)
    })

}


// RETRIEVE hotels packages based on criteria & fields
// https://docs.mongodb.com/manual/reference/method/db.collection.find/#find-projection
// options = {
//    fields: {/** Projection **/}
// }
exports.select = function (criteria,options, callback) {
    model.Hotels.find(criteria, function (err, data) {
        callback(err, data)
    }).select(options.fields)
}