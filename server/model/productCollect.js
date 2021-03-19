const mongoose = require('mongoose')
const {
    Schema
} = mongoose

const schema = new Schema({
    name: String,
    description: String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }]
});

module.exports = mongoose.model('ProductCollect', schema);