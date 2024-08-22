//const app=require('express')()
const express = require('express')
const app = express()
 require('dotenv').config()

app.set('view engine','ejs')
require("./model/index")

const data ={
    name:"Badri",
    religion:"hindu",
    ph: 222
}
app.get('/',(req,res)=>{
    res.render("home.ejs",{
        home:data
    })
})



app.get('/about',(req,res)=>{
    res.render("about.ejs")
})

app.use(express.static('public/css/'))

app.listen(3000,()=>{
    console.log("i am a not nodejs code")
})