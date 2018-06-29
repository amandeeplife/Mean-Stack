var express = require('express');
var bodyParser = require('body-parser')
var path  = require ('path')

var app = express();

// var logger = function(req,res,next){
//     console.log("logging . . . ")
//     next();
// }
// app.use(logger);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine','ejs')
app.set('views', (path.join(__dirname,'public')))

app.use(express.static(path.join(__dirname,'public')))

app.get('/ht',function(req,res){
    var title = 'customers';

    res.render('index',{
        title:'My Ht Customer'
    })
})

app.get('/',function(req,res){
    var title = 'customers';

    res.render('index',{
        title:'Customers'
    })
})
app.listen(3000,function(){
    console.log("server Started on port 3000 . . .")
})