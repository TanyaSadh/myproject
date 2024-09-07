// const routes = require("express").Router();
// const User=require("../models/User");
// const sha1 = require("sha1");

// routes.post("/",async(req,res)=>{
//     delete req.body.repassword;
//     req.body.password=sha1(req.body.password);
//     await User.create(req.body);
//     res.send({success:true});
// })
// module.exports=routes;
const routes = require("express").Router();
const User = require("../models/User")
const sha1 = require("sha1");
const rand = require("random-string");

routes.post("/", async(req, res)=>{
    
    delete req.body.repassword;

    req.body.password = sha1(req.body.password);

    await User.create(req.body);
    res.send({ success : true });
})

routes.post("/forgot" , async(req,res)=>{
   let username = req.body.username;
   let result = await User.find({email : username });

   if (result.length >=1){
    let otp =  rand({length : 6 , numeric : true , letters : false , special : false });
await User.updateMany({email : username} , {otp:otp});
    res.send({success : true , otp : otp});
   }
   else{
    res.send({success : false});
   }
})

routes.post("/changepassword", async(req, res)=>{
    await User.updateMany({ otp : req.body.otp }, { password : sha1(req.body.password) });
    res.send({success : true});
   
})

module.exports = routes;