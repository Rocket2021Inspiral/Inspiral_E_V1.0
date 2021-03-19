const mongoose = require('mongoose')
const {
    Schema
} = mongoose

const schema = new Schema({
    name: String,
    description: String,
    docs: [{
        title: String,
        link: String
    }],
    demos: [{
        title: String,
        link: String
    }]
});

module.exports = mongoose.model('Product', schema);