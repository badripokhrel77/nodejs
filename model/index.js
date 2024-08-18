const {Sequelize,DataType} = required('sequelize')

const sequelize = new Sequelize('nodejs','root','',{
    host:'localhost',
    port: 3306
})