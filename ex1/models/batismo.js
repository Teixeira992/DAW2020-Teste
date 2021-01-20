var mongoose = require('mongoose')

var batismoSchema = new mongoose.Schema({
    _id: String,
    pai: String,
    mae: String,
    date: String,
    title: String,
    ref: String,
    href: String
})

module.exports = mongoose.model('batismos', batismoSchema)