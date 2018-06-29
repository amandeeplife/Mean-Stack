var violin  = require('./Event')

const violinInstance = new violin()

violinInstance.on('note',function(){
    console.log("violing is playing ")
})

 