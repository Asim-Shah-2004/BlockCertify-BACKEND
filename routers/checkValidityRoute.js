const express = require('express')
const { checkIsValidity } =  require('../controllers/checkIsValidityController.js')

const checkValidityRoute = express.Router()

checkValidityRoute.post('/', checkIsValidity)

module.exports = {
    checkValidityRoute
};