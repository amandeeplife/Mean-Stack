//1 Resolving IP
const dns = require('dns')
 dns.resolve4('www.mum.edu', function (err, addresses) {
console.log(addresses)
})
//1 promisifying Dns Core Module 
 const {promisify} = require('util')
 const dns = require('dns')
 var res = promisify(dns.resolve4);
 res('www.mum.edu').then((add)=>{console.log(add)}).catch(err=>console.log(err))

//2 Using Async and Wait 
const {promisify} = require('util')
const dns = require('dns')
const res = promisify(dns.resolve4);
async function main() {

    try{
       const data= await res('www.mum.edu')
        console.log(data);
    }
    catch(err){
        console.log('error:', err);
    }
}


main();