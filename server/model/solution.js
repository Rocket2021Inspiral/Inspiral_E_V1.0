const mongoose = require('mongoose')
const {
    Schema
} = mongoose

const schema = new Schema({
    name: String,
    tags: [String],
    productCollects: [{
        type: Schema.Types.ObjectId,
        ref: "ProductCollect"
    }]
});

module.exports = mongoose.model('Solution', schema);