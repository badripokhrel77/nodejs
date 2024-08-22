const makeUserTable= (sequelize,DataTypes)=>{
   const User= sequelize.define('user',{
        title : {
            type: DataTypes.STRING,
            allowNull : false
        },
        subtitle : {
            type : DataTypes.STRING,
            allowNull : false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull : false
        },
        image: {
            type: DataTypes.STRING
        }
    })
    return User
    }
    module.exports = makeUserTable