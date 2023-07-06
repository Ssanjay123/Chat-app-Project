const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
const dotenv = require("dotenv");
dotenv.config();
const sequelize = require("./util/database")
// const mongoose = require("./util/database")

const userRoutes = require("./routes/user")
const chatRoutes = require("./routes/chat")
const groupRoutes = require("./routes/group")
const sendmailRoutes = require("./routes/sendmail")

const User = require("./models/user");
const Chat = require("./models/chat");
const Group = require("./models/group")
const userGroup = require("./models/userGroup")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use(cors());

app.use("/user",userRoutes);
app.use("/chats",chatRoutes);
app.use("/group",groupRoutes);
app.use(sendmailRoutes);

app.use((req,res)=>{
    res.sendFile(path.join(__dirname, `views/${req.url}`))
})

User.hasMany(Chat)
Chat.belongsTo(User)

User.hasMany(userGroup)
Group.hasMany(userGroup)

Group.hasMany(Chat)
Chat.belongsTo(Group)

userGroup.belongsTo(User)
userGroup.belongsTo(Group)


sequelize
// .sync({force:false,alter:true})
// .sync({force:true})
.sync()
.then(()=>{
    app.listen(process.env.PORT)
})
.catch(err=>{
    console.log(err);
})

// app.listen(3000,()=>{
//     console.log("server is running")
// })