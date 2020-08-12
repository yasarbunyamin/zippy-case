const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://bunyamin:test1234@shop.qjipm.mongodb.net/shop?retryWrites=true&w=majority',(error)=>{
    if(!error){
        console.log('connected to mongo db')
    }
})


app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const main=require('./routes/main')
app.use('/',main)



app.listen(3000);