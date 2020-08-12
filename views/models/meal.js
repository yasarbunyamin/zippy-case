const mongoose = require('mongoose')

const MealSchema = new mongoose.Schema({
    restaurant_username:{type: String,require:true},
    menu_id:{type: String,require:true},
    menu_name:{type: String,require:true},
    //email: {type: String,require:true},
   // password: {type: String,require:true},
})

module.exports = mongoose.model('Meals',MealSchema)