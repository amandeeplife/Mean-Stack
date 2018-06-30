const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/tut')
const app = express() 

app.use(bodyParser.json());
app.use('/api/',routes)
app.listen(2000)