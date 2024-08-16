//const app=require('express')()
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("tw kholeko page yehi ho ")
})

app.get('/about',(req,res)=>{
    res.send("tw kholeko about ma khi xaina ")
})




app.listen(3000,()=>{
    console.log("i am a nodejs code hu")
})