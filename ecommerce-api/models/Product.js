const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    categories: {
        type: Array,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Products', ProductSchema);
