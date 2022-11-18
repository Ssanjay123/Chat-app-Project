const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
const sequelize = require("./util/database")

const userRoutes = require("./routes/user");
const User = require("./models/user");
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use(cors());

app.use("/user",userRoutes);

sequelize
// .sync({force:true})
.sync()
.then(()=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err);
})