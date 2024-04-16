const express = require('express')
const {invalidateEntry} = require('../controllers/invalidateEntryController.js')

const invalidateEntryRoute = express.Router()

invalidateEntryRoute.post('/', invalidateEntry)

module.exports = {
    invalidateEntryRoute
};