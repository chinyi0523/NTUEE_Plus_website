const mongoose = require('./db'),
    Schema = mongoose.Schema;

const Study_Schema = new Schema({
    link1: String,
    link2: String,
    year:{type:Number, default: Date.getFullyear()}
})

module.exports = mongoose.model('Study_Link',Study_Schema);

  