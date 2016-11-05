/**
 * "REST API Course"
 * 
 * Model for the ACME hotels
 */

var settings = require('../db/settings')


var HotelsSchema = settings.mongoose.Schema(
    {
        /** No schema defined for hotels - Student may do it themselves */
    },
        /** remove the following if you define the schema */
    { strict: false }
);

// Export the model
exports.Hotels = settings.mongoose.model('hotels', HotelsSchema)