const express = require('express')
const moment = require('moment')
const Addvertise = require('../Models/Addvertise')
const router = express.Router()



router.get('/addvertises', (req, res) => {
    Addvertise.find({}).sort({ createdAt : -1 }).exec((err, addvertises) => {
        res.send(addvertises)
    })
})

router.get('/addvertises/:name', (req, res) => {
    let name = req.params.name
    Addvertise.findOne({"name": name}, (err, addvertise) => {
        res.send(addvertise)
    })
})

router.post('/addvertises', (req, res) => {
     let  addvertise = {
        ...req.body,
        startTime : moment(req.body.startTime, 'hh:mm a').format('h:mm a'),
        endTime : moment(req.body.endTime, 'hh:mm a').format('h:mm a'),
        date: moment(req.body.date, "YYYY-MM-DD"),
    }
   
    let newAddvertise = new Addvertise(addvertise)
    newAddvertise.save().then((addv) => {
        res.send(addv)
    }); 
})


module.exports = router