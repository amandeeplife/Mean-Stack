var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb2";
var crypto= require('crypto');
var express=require('express');
var app=express();

var myresult

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb2");
  dbo.collection("testraw").findOne({}, function(err, result) {
    if (err) throw err;
    myresult=result.message;
    db.close();
  });
 
});

app.get('/secret', function(req,res){
    //dycrypt
var mykey = crypto.createDecipher('aes256', 'asaadsaad');
var mystr = mykey.update(myresult,'hex', 'utf8')
 res.send(mystr);
//console.log(mystr);

}).listen(8282);

