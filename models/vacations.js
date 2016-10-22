/**
 * "REST API Course"
 * 
 * Model for the ACME vacation package.
 */

var settings = require('../db/settings')


var VacationsSchema = settings.mongoose.Schema(
    {
        // Name of the vacation package - BAHAMAS1000 - primary Key
        name: {type:String, required:[true,'name is needed']},
        description : {type:String, required:true},
        // ACME offers resorts & cruise vacation package
        type: {type:String, enum:['resort','cruise']},
        // Destination city
        destinations : [{city:String, country:String}],
        // Includes - what all does the package Include
        includes : [{
            what:{type:String, enum:['flight', 'meals','cruise','hotel','rentalcar','excursions','misc']},
            description:{type:String, required:false}
        }],
        numberOfNights:{type: Number, required:true, min:1, max:31},
        // Price per person
        pricePP: Number,
        // Special offers
        offer : {
            discount: Number,
            description : String,
            expires:{type:Date, required:false}
        },
        // Till what date is the package valid
        validTill:{type:Date, required:true},
        // Package may get sold out
        soldout: {type:Boolean, required:true, default:false},
        // Link to pictures
        pictures:{type:[String]}
    }
);

// Export the model
exports.Vacations = settings.mongoose.model('vacation', VacationsSchema)