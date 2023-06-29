const nodemailer = require("nodemailer");

exports.sendMail = (req,res)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"thorbolebalaji1997@gmail.com",
            pass:"vkjmkbqczkpdqdzi"
        }
    })
console.log(req.body)
    const mailcontrol = {
        // from:"thorbolebalaji1997@gmail.com",
        to:req.body.to,
        subject:"sending email via node.js",
        text:"super easy"
    }

    transporter.sendMail(mailcontrol,function(err,success){
        if(err){
      console.log(err)
        }
        else{
            console.log(success)
            res.status(201).json({message:"sent successfully"})
        }
    })
}