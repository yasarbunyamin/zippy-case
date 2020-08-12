
const mongoose = require('mongoose')

const mealPost = require('./views/models/meal')

mongoose.connect('mongodb+srv://bunyamin:test1234@shop.qjipm.mongodb.net/shop?retryWrites=true&w=majority',(error)=>{
    if(!error){
        console.log('connected to mongo db')
    }
})
mealPost.create({
    restaurant_username:'gulluoglu',
    menu_id:'3',
    menu_name:'sarma'
},(error,post)=>{
    console.log(error,post)
})

/*
Post.find({},(error,post)=>{
    console.log(error,post)
})*/