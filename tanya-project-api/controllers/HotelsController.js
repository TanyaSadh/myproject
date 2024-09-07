const routes = require("express").Router();
const Hotel = require("../models/Hotel")


 routes.get("/", async(req, res)=>{
    let result = await Hotel.find();
         res.send(result);
 })

 routes.get("/:id", async(req, res)=>{
    let result = await Hotel.find({_id : req.params.id});
         res.send(result[0]);
 })

 routes.post("/", async(req, res)=>{
    await Hotel.create(req.body)
    res.send({success : true});
})
routes.put("/:id", async(req, res)=>{
    await Hotel.updateMany({_id : req.params.id}, req.body)
    res.send({success : true});
})
routes.delete("/:id", async(req, res)=>{
    await Hotel.deleteMany({_id : req.params.id})
    res.send({success : true});
})

module.exports = routes;