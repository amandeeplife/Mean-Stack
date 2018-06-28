var EventEmiter = require('events');

class Violin extends EventEmiter{

    constructor(){
        super()
        let self = this;
        setInterval(function(){self.emit("note")},1000)
      } 
}

module.exports = Violin