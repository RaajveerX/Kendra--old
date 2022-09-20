const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name:{ type:String },
    section:{ type:String },
    instructor:{ type:String} ,
    room:{ type:String },
    time:{ type:String },

    
})


module.exports = mongoose.model('Course',CourseSchema)
