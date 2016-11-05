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


// RETRIEVE vacation packages based on criteria
exports.select = function (criteria, callback) {
    model.Hotels.find(criteria, function (err, data) {
        callback(err, data)
    })
}