var express  = require('express');
const {from} = require ('rxjs')
var axios = require ('axios')
var app = express();
var port = 3000;

app.set('x-powered-by',false)
app.enable('case sensitive routing')
app.set('strict routing',true)

app.get('/users',function(req,res){
// axios.get('https://jsonplaceholder.typicode.com/users').then(function(data){
//      res.send(data)
//  })

// let myPromise  = axios.get('https://jsonplaceholder.typicode.com/users')

// let myObservable = from(myPromise)
// myObservable.subscribe(e=>{
//   res.send(e.data)
//  })
async function main() {

    try{
       const data= await axios.get('https://jsonplaceholder.typicode.com/users')
        res.send(data.data)
    }
    catch(err){
        console.log('error:', err);
    }
}
main();
})

app.listen(port)