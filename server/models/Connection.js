const mongoose = require('mongoose');

const ConnectionSchema = new mongoose.Schema({
    url:{ type:String},
    tag:{ type:String},
})


module.exports = mongoose.model('Connection',ConnectionSchema)
