/**
 * All database operations related to the vacations collection will reside in this file
 */
var model = require('../models/vacations')
var settings = require('../db/settings')

// CREATE the vacation package
exports.save = function (data, callback) {

    new model.Vacations(data).save(function (err, inserted) {
        callback(err, inserted)

    })
}

// CREATE multiple vacation packages
exports.saveMany = function (rows, callback) {

    model.Vacations.insertMany(rows, function (err, docs) {
        callback(err, docs)
    })

}

// UPDATE the vacation packages
// http://mongoosejs.com/docs/api.html#model_Model.update
exports.update = function (criteria, doc, callback) {
    model.Vacations.update(criteria, doc, function (err, data) {
        callback(err, data)

    })
}

// RETRIEVE vacation packages based on criteria
exports.select = function (criteria, callback) {
    model.Vacations.find(criteria, function (err, data) {
        callback(err, data)
    })
}