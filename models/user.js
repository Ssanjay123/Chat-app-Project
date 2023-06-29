const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define("users",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
},
name:{
    type:Sequelize.STRING,
    allowNull:false,
},
email:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
},
password:Sequelize.STRING
});

module.exports = User;



// const mongoose = require("mongoose");

// const User = new mongoose.Schema({
//     name :{type:String,default:null}, 
//     email: {type:String,default:null},      
//     password: {type:String,default:null}      
// });

// module.exports = new mongoose.model("user",User);