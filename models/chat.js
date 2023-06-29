const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Chat = sequelize.define("chats",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:Sequelize.STRING,
        allowedNull:true
    },
    message:{
    type:Sequelize.STRING,
    allownull:false
    }
})

module.exports = Chat;

// const mongoose = require("mongoose");

// const Chat = new mongoose.Schema({
//     name :{type:String,default:null}, 
//     message: {type:String,default:null},      
// });

// module.exports = new mongoose.model("chat",Chat);