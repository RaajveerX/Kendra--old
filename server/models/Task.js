const mongoose = require('mongoose');

const TaskManSchema = new mongoose.Schema({
    name : {
        type:String,
        trim:false
    },
    completed:{
        type:Boolean,
        default:false
    },
    due:{
        type:Date
    },
    time:{
        type:String
    },


})


module.exports = mongoose.model('Task',TaskManSchema)
