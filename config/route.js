const express = require('express')
const route = express.Router()
const jobcontroller = require('../app/controller/jobcontroller')

route.get('/job',jobcontroller.list)
route.post('/job',jobcontroller.create)
route.put('/job/:id',jobcontroller.edit)
route.delete('/job/:id',jobcontroller.remove)

module.exports = route