const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticate = (req,res,next)=>{
    try{
  const token = req.header("authorization");
  const user = jwt.verify(token,"Balaji")
  User.findByPk(user.userId).then(user=>{
    req.user = user;
    next();
  })
}
catch(err){
    res.status(401).json({success:false});
}
}

module.exports = {
    
    authenticate
};