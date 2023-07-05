// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://Balajiii123:Balajii123@cluster0.cjk1b9i.mongodb.net/chat?retryWrites=true&w=majority",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(()=> console.log("connection successful"))
// .catch((err)=> console.log(err))


const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    dialect : "mysql",
    host: process.env.DB_HOST
})

module.exports = sequelize;