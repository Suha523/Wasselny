const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addvertiseSchema = new Schema({
    name: String,
    phone: Number,
    startPoint: String,
    endPoint: String,
    startTime: String,
    endTime: String,
    positions: Number,
    date: Date,
    isEveryday: Boolean
},
{ timestamps: true })

const Addvertise = mongoose.model('Addvertise', addvertiseSchema)
module.exports = Addvertise

