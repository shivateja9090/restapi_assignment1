// model schema defining 
const mongooose = require('mongoose');
const CoordinatesSchema = new mongooose.Schema({
    LAT: {
        type: Number,
        required:true
    },
    LONG: {
         type: Number,
        required:true
    },
    VALUE: {
        type: Number,
        required:true
    }
})

const Coordinates = mongooose.model('Coordinates', CoordinatesSchema);

module.exports = Coordinates;