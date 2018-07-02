const bodyParser = require('body-parser')

const morgan = require('morgan');
const express = require('express');
const validator = require('express-validator')
// var cors = require('cors')
const GradeService = require('./service/gradeService')
const app = express();
const Grade = require('./model/Grade')
 const routes  = require('./routing/myRoute')

 grade = new Grade();
 gradeService = new GradeService();
 
 app.use(express.json())
 // app.use(cors())
 app.use(morgan('combined')) 
 app.use(express.urlencoded({extended:true}))
 app.use(validator())
 

app.use(bodyParser.json());
app.use('/',routes)
app.listen(2000)
//end