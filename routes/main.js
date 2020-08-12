const express = require('express');
const router = express.Router()
const ClientPost = require('../views/models/client')
const mealPost = require('../views/models/meal')


router.get('/', (req, res) => {
    res.render('home');
});



router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login',(req,res)=>{
    mealPost.find({}).then(posts=>{
        res.render('menulist',{posts:posts})

    })
      //  res.redirect('menulist')

    
})

router.get('/:id', (req, res) => {
    ClientPost.findById(req.params.id).then(post=>{
       
        res.render('menulist',{post:post})
    })
    mealPost.find({}).then(posts=>{
        res.render('menulist',{posts:posts})

    })



})



router.get('/menulist', (req, res) => {
    mealPost.find({}).then(posts=>{
        res.render('menulist',{posts:posts})

    })
});





router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register',(req,res)=>{
    ClientPost.create(req.body)
    res.redirect('/')
})


module.exports= router