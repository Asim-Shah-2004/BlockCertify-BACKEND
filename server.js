require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000
const connectMongoDb = require('./services/connectMongoDB.js')
const cors = require('cors')
const corsOptions = require('./config/corsOptions.js')
const {addEntryRoute} = require('./routers/addEntryRoute.js')
const {checkValidityRoute} = require('./routers/checkValidityRoutr.js')

app.use(cors(corsOptions))
app.use(express.json())
app.use(bodyParser.json())

connectMongoDb()

app.use('/addEntry',addEntryRoute)
app.use('/checkValidity',checkValidityRoute)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
