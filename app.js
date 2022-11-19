const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
const sequelize = require("./util/database")

const userRoutes = require("./routes/user");
const User = require("./models/user");
const Chat = require("./models/chat");
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use(cors());

app.use("/user",userRoutes);

User.hasMany(Chat);
Chat.belongsTo(User);

sequelize
// .sync({force:false,alter:true})
.sync()
.then(()=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err);
})