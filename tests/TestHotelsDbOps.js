process.env.DB_URI = "mongodb://ds059316.mlab.com:59316/acmetravel"
process.env.DB_USER = "***"
process.env.DB_PASSWORD = "***"

//Test#1  Insert the Vacation data
var db = require('../db/hotels')
var data = require('../data/hotels')

// Insert if argv[2] == insert otherwise select
if (process.argv.length > 2 && process.argv[2] === 'insert') {
    // Save multiple rows
    db.saveMany(data.MultipleRows, function (err, docs) {
        if (err) {
            console.log("Failed multiple row insert")
            console.log(err)
            process.exit(1)
        } else {
            console.log("Success - Multiple rows inserted - %d", docs.length)
            process.exit(0)
        }
    });
} else {

    // Select hotels with some criteria
    var selectCriteria = {}
    var options = {fields:{name:1,type:1,city:1}}
    db.select(selectCriteria, options, function (err, data) {
        if (err) {
            console.log("Failed to get vacations : %s", criteria)
            console.log(err)
            process.exit(1)
        } else {
            console.log("Successfully selected %d documents for %s", data.length, JSON.stringify(selectCriteria))
            console.log(data)
            process.exit(0)
        }
    });
}