const User = require("../models/user");
const Chat = require("../models/chat");

exports.addchats = async(req,res)=>{
    try{
    const {msg} = req.body;
   const result =  await Chat.create({name:req.user.name,
    message:msg,
    userId:req.user.id,
    groupId:null
     })
    res.status(201).json({newMsg:result,success:true});
}
catch(err){
    res.status(500).json(err);
}
}

exports.getChats = async(req,res)=>{
    try{
     const response =  await Chat.findAll({where:{groupId:null}});
     res.status(200).json({allMsgs:response});
    }
    catch(err){
        res.status(500).json(err);
    }
}