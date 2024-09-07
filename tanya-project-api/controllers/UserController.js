const routes = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

routes.get("/", async(req, res)=>{
    let result = await User.find();
         res.send(result);
 })

 routes.put("/:id" , async(req , res)=>{
    let id = req.params.id ;
    await User.updateMany({_id:id},req.body);
    res.send({success:true});
    
 })
 routes.get("/profile", async(req, res)=>{
   let token = req.headers.authorization;
   let info = jwt.decode(token, "the stepping stone");
   let result = await User.find({ _id : info.id });
   res.send(result[0]);
})

 module.exports = routes;