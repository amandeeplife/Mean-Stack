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
//  app.use(function(req,res,next){
//      res.header("Access-Control-Allow-Origin","*")
//  })
 
  

app.use(bodyParser.json());
app.use('/',routes)
app.listen(2000)

// router.delete('/',function(req,res){
//     console.log("delete router")
// })

// app.get('/',function(req,res){
//      grade=  gradeService.getGrade(req.query.name)
//      console.log("data populated")
//     res.send(grade)
// })
 
// app.post('/',function(req,res){
//     req.assert('name','Person name can not be empty').notEmpty();
//     var errors = req.validationErrors();
//     if(errors) res.send({errors:errors})
//     else {
//     gradeService.addGrade(req.body.name,req.body.course,req.body.grade)
//      res.end();
//     }
// })
// app.put('/',function(req,res){
    
// })

// app.delete('/',function(req,res){
//     console.log("delete req")
//     res.end();
// })

 