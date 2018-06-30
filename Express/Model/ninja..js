const mongoose = require('mongoose')

const schema = mongoose.Schema;


const NinjaSchema  = new schema({
    name : {
        type : String,
        required:[true,"Name field is required"]
    },
    rank : {
        type: String,
    },
    available: {
        type:boolean,
        default:false;
    }
})