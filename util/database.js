// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://Balajiii123:Balajii123@cluster0.cjk1b9i.mongodb.net/chat?retryWrites=true&w=majority",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(()=> console.log("connection successful"))
// .catch((err)=> console.log(err))


const Sequelize = require("sequelize");

const sequelize = new Sequelize("chat-app","root","Balaji@123",{
    dialect : "mysql",
    host: "localhost"
})

module.exports = sequelize;