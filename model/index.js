const {Sequelize,DataType} = required('sequelize')

const sequelize = new Sequelize('nodejs','root','',{
    host:'localhost',
    port: 3306,
    dialect: 'mysql'
})
sequelize.authentication()
.then(()=>{
    console.log("correct good!!")
})
.catch((err)=>{
    console.log("Milena tw k bigryo",err)
})
const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

