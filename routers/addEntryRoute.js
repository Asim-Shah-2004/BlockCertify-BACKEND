const express = require('express')
const { addEntry } =  require('../controllers/addEntryController')

const addEntryRoute = express.Router()

addEntryRoute.post('/', addEntry)

module.exports = {
    addEntryRoute
};