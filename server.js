require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000
const connectMongoDb = require('./services/connectMongoDB.js')
const cors = require('cors')
const corsOptions = require('./config/corsOptions.js')
const {addEntryRoute} = require('./routers/addEntryRoute.js')
const {checkValidityRoute} = require('./routers/checkValidityRoute.js')
const {invalidateEntryRoute} = require('./routers/invalidateEntryRoute.js') 
const { revalidateEntryRoute } = require('./routers/revalidateEntryRoute.js')

connectMongoDb()

app.use(cors(corsOptions))
app.use(express.json())
app.use(bodyParser.json())

app.use('/addEntry',addEntryRoute)
app.use('/checkValidity',checkValidityRoute)
app.use('/invalidateEntry',invalidateEntryRoute)
app.use('/revalidateEntry',revalidateEntryRoute)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
