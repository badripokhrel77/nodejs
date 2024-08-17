//const app=require('express')()
const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render("home.ejs")
})

const data ={
    name:"Badri",
    cast:"hindu",
    ph: 222
}


app.get('/about',(req,res)=>{
    res.render("about.ejs",{
        home:data
    })
})

app.use(express.static('public/css/'))

app.listen(3000,()=>{
    console.log("i am a nodejs code")
})