const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    username:{type: String,require:true},
    menuid:{type: String,require:true},
    //email: {type: String,require:true},
   // password: {type: String,require:true},
})

module.exports = mongoose.model('Carts',ClientSchema)