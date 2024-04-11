require('dotenv').config()
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.json());

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})