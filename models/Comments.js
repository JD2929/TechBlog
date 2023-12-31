const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model{}

Comments.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      text:{
        type:DataTypes.STRING,
        allowNull:false
      },
      userId:{
        type: DataTypes.INTEGER,
        references:{
            model:'user',
            key:'id'
        }
      }
},{
    sequelize,
    modelName:'comment'
})

module.exports=Comments;