const express = require('express')
const validator = require('express-validator')
const Grade = require('../model/Grade')
const GradeService = require('../service/gradeService')

const router  = express.Router();
grade = new Grade();
gradeService = new GradeService();

router.use(express.urlencoded({extended:true}));
router.use(validator());

router.get('/:name',function(req,res){
   grade=  gradeService.getGrade(req.params.name)
    res.send(grade)
})

router.post('/',function(req,res){
    console.log("pos")
    req.assert('name','Person name can not be empty').notEmpty();
        var errors = req.validationErrors();
        if(errors) res.send({errors:errors})
        else {
        gradeService.addGrade(req.body.name,req.body.course,req.body.grade)
         res.end();
        }})

router.put('/:name',function(req,res){
    let grade  = new Grade(req.body.name,req.body.course,req.body.grade)
    gradeService.putGrade(grade)
     res.send(req.params.id)
     res.end()
})

router.delete('/:name',function(req,res){
    gradeService.deleteGrade(req.params.name)
    res.end()
})

module.exports = router;