const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

exports.signUp = async(req,res)=>{
    try{
    const{name,email,password} = req.body;

 const user = await User.findAll({where:{email:email}})

//  const user = await User.find({email:email})
  if(user[0]){
    res.status(200).json({message:"User Already Exists"})
  }
  else{
    const saltRound = 10;
   bcrypt.hash(password,saltRound,async(err,hash)=>{
    // console.log(err);
//     const user = new User({name:name,email:email,password:hash})
//    await user.save();
    await User.create({name,email,password:hash});
    console.log("created user")
    res.status(201).json({success:true,msg:"successfully created new user"});
 })
}
}
    
catch(err){
    res.status(500).json(err);
}
}

function generateAccessToken(id){
    return jwt.sign({userId:id},"Balaji")
}

exports.login = async(req,res)=>{
    try{
    const{email,password} = req.body;
     
   const user =  await User.findAll({where:{email}})
//    const user =  await User.find({email:email})
    if(user.length>0){
    bcrypt.compare(password,user[0].password,(err,result)=>{
        if(!err){
            res.status(200).json({message:"User Successfully logged in",token:generateAccessToken(user[0].id)});
        }
        else{
            res.status(400).json({message:"Password is incorrect"})
        }
    })
    }
    else{
        res.status(401).json({message:"User Not Exists"})
    }
}
catch(err){
    res.status(500).json({success:false},err)
}
}