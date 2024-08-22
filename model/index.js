// const { noBoolOperatorAliases } = require("sequelize/lib/utils/deprecations")

const {Sequelize,DataType, DataTypes} = require('sequelize')

const databaseConfig= require('../config/dbConfig')

const makeBlogTable = require("./blogModel")
const makeUserTable = require("./userModel")

console.log(process.env.USERNAME)
const sequelize = new Sequelize(databaseConfig.db,databaseConfig.username,databaseConfig.password,{
    host : databaseConfig.host, 
    port : databaseConfig.port, 
    dialect : databaseConfig.dialect, 
    operatorsAliases : false, 
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

db.blogs= makeBlogTable(sequelize,DataTypes)
db.users= makeUserTable(sequelize,DataTypes)

db.sequelize.sync({force: false})
.then(()=>{
    console.log("okk done connected successfully!!")
})

 module.exports=db
