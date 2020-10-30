const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    flavors: {
        type: [String]
    }
});

module.exports = mongoose.model('Cake', CakeSchema);