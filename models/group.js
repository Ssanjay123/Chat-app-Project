const Sequelize = require("sequelize");
const  sequelize  = require("../util/database");

const group = sequelize.define('group',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    GroupName :{
         type:Sequelize.STRING,
         allowNull:false
    }

})

module.exports = group;

// const mongoose = require("mongoose");

// const Group = new mongoose.Schema({
//     groupname :{type:String,default:null}, 
     
// });

// module.exports = new mongoose.model("group",Group);