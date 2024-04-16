const express = require('express')
const {revalidateEntry} = require('../controllers/revalidateEntryController.js')

const revalidateEntryRoute = express.Router()

revalidateEntryRoute.post('/', revalidateEntry)

module.exports = {
    revalidateEntryRoute
}