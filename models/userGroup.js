const Sequelize = require("sequelize");
const  sequelize  = require("../util/database");

const userGroup = sequelize.define('userGroup',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    isAdmin:Sequelize.BOOLEAN
})

module.exports = userGroup


