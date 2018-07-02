const express = require('express')
const Ninja = require('../models/ninja')
const router  = express.Router();

router.get('/ninjas',function(req,res){
    res.send({type: 'GET'})
})

router.post('/ninjas',function(req,res){
 Ninja.create(req.body).then(function(data){
     res.send("Data Saved Successfully!")
 })
})

router.put('/ninjas/:id',function(req,res){
    res.send({type: 'PUT'})
})

router.delete('/ninjas/:id',function(req,res){
    res.send({type: 'DELETE'})
})

module.exports = router;