const User = require('../models/user');
const bcrypt = require("bcrypt");

exports.signUp = async(req,res)=>{
    try{
    const{name,email,password} = req.body;
    const saltRound = 10;
   bcrypt.hash(password,saltRound,async(err,hash)=>{
    // console.log(err);
    await User.create({name,email,password:hash});
    res.status(201).json({success:true,msg:"successfully created new user"});
 })
}
catch(err){
    res.status(500).json(err);
}
}
