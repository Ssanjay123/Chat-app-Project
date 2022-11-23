const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
const sequelize = require("./util/database")

const userRoutes = require("./routes/user");
const chatRoutes = require("./routes/chat")
const groupRoutes = require("./routes/group")

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
    app.listen(3000)
})
.catch(err=>{
    console.log(err);
})