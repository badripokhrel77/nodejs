//const app=require('express')()
require('dotenv').config()
const express = require('express')
const { blogs } = require('./model/index')
const app = express()

// app.use(express.json{})
 app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
require("./model/index")

app.get("/create",(req,res)=>{
    res.render('create.ejs')
})
app.post('/create',async(req,res)=>{
    // const title= req.body.title
    const {title,subtitle,description}=req.body
   await blogs.create({
        title: title,
        subtitle: subtitle,
        description: description
    })
    res.send("Blog added successfully")
})

app.use(express.static('public/css/'))

app.listen(3000,()=>{
    console.log("i am a not nodejs code")
})