const http = require ('http')
const { fork }= require ('child_process');
const server = http.createServer();
const fs = require('fs')
const url = require('url')

const queryString = require('querystring')

server.on('request',(req,res)=>{
 
    const myUrl =queryString.stringify(url.parse(req.url)).split("%2F")
    
   
   

    if ( myUrl.pop()== 'file.txt') {
        res.setHeader('content-type', 'text/html');

        const childProcess = fork('reactiveChild.js');
        childProcess.send('start')
        req.setEncoding("utf8");

        childProcess.on('message',(data)=>{
            res.end(data)
        })


     }

  
}).listen(8085) 