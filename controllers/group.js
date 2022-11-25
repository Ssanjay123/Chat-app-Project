const Group = require('../models/group')
const userGroup = require('../models/userGroup')
const Chat = require('../models/chat')
const User = require('../models/user')

exports.createGroup = (req,res)=>{
    const {groupName} = req.body;

     console.log(groupName);
     Group.create({GroupName:groupName})
     .then(group =>{
       const groupId = group.id;
       userGroup.create({groupId : 
        groupId, userId : req.user.id,isAdmin:true})
       .then(userGroup =>{
        res.status(201).json({message:"created"})
       })
     })
     .catch(err =>{
         console.log(err)
        res.status(500).json({message:"failed"})
     })

 }

 exports.groupdetails = (req,res)=>{
    userGroup.findAll({where:{userId:req.user.id},include: [
      {
        model: Group,
        required: false,
      }
    ]})
    .then(result =>{
      res.status(200).json({data:result,message:"success"})
    })
    .catch(err =>{
        console.log(err)
      res.status(500).json({message:"failed"})
    })
   }

   exports.postMessage =(req,res)=>{
    const groupId = req.params.id;
    const message = req.body.message;
    Chat.create({message:message ,groupId : groupId , userId : req.user.id })
    .then(result =>{
      console.log(result)
      res.status(201).json({message:"created"})
    })
    .catch(err =>{
      console.log(err)
      res.status(500).json({message:"failed"}) 
    })
  }
  
  exports.getMessage = (req,res)=>{
    const groupid = req.params.id;
      Chat.findAll({where:{groupId:groupid},include: [
        {
          model: User,
          required: false,
        }
      ]})
    .then(result =>{
     res.status(200).json({data:result,message:"success"})
    })
    .catch(err=>
     res.status(500).json({message:"failed"}))
  }
  
  exports.addUser = (req,res)=>{
    const name = req.body.user;
    const groupid = req.params.id;
    User.findOne({where :{name:name}})
    .then(user =>{
     
      userGroup.create({userId:user.id,groupId:groupid})
      .then(result=>{
        res.status(201).json({data:[result],message:"created"})
      })
    })
    .catch(err=>{
     res.status(500).json({message:"failed"})
    })
  }
  
  exports.getUser = (req,res)=>{
    const groupid = req.params.id;
    userGroup.findAll({where:{groupId:groupid},include: [
      {
        model: User,
        required: false,
      }
    ]})
    .then(result =>{
      res.status(200).json({data:result , message:"successful"})
    })
    .catch(err =>{
      res.status(500).json({message:"failed"})
    })
  }
  
  exports.deleteUser = (req,res)=>{
    const groupid = req.query.groupId;
    const userId = req.query.userId;
    userGroup.destroy({where:{groupId:groupid , userId:userId}})
    .then(result =>{
      res.status(200).json({message:"deleted"})
    })
    .catch(err =>{
      res.status(500).json({message:"failed"})
    })
  }

