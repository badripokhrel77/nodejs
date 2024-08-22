const { noBoolOperatorAliases } = require("sequelize/lib/utils/deprecations")

const {Sequelize,DataType} = require('sequelize')
const databaseConfig= require('../config/dbConfig')

const sequelize = new Sequelize('databaseConfig.db','databaseConfig.username','databaseConfig.password',{
    host:'localhost',
    port: 3306,
    dialect: 'mysql',
    OperatorAliases: false,
    pool:{
    max:5,
    min:0,
    accuire:3000,
    idle: 10000
    }
})
sequelize.authenticate()
.then(()=>{
    console.log("database is connecting.....")
})
.catch((err)=>{
    console.log("Milena tw k bigryo",err)
})
const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.sequelize.sync({force: false})
.then(()=>{
    console.log("okk done connected successfully!!")
})

 module.exports=db
