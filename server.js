require('dotenv').config()
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const connectMongoDb = require('./services/connectMongoDB.js')

connectMongoDb()

app.use(express.json());
app.use(bodyParser.json());

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})