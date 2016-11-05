/**
 * "REST API Course"
 * 
 * Model for the ACME hotels
 */

var settings = require('../db/settings')


var HotelsSchema = settings.mongoose.Schema(
    {
       /** Open schema - Student may do it themselves */
    }
);

// Export the model
exports.Hotels = settings.mongoose.model('hotels', HotelsSchema)