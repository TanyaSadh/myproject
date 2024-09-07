const routes = require("express").Router();
const Destination = require("../models/Destination")
const path = require("path");
const { UniqueString } = require("unique-string-generator");


routes.get("/category/:x", async(req, res)=>{
  
    let cate = req.params.x;
    let result = await Destination.find({ category : cate });
    res.send(result);
 })




 routes.get("/", async(req, res)=>{
    let result = await Destination.find();
         res.send(result);
 })

 routes.get("/:id", async(req, res)=>{
    let result = await Destination.find({_id : req.params.id});
         res.send(result[0]);
 })

 routes.post("/", async(req, res)=>{

    let unique_name = UniqueString();
    let file = req.files.image;
    let arr = file.name.split(".");
    let ext = arr[arr.length-1];

    let new_name = unique_name + "." + ext;

    let upload_path = path.resolve()+"/assets/destination-images/"+new_name;
    file.mv(upload_path, async(err)=>{
        if(err){
            console.log(err);
            return;
        }
        req.body.image = new_name;
        await Destination.create(req.body)
        res.send({success : true});
    })
    //  console.log(req.body);
    //  console.log(req.files);
    //await Destination.create(req.body)
    //res.send({success : true});
})
routes.put("/:id", async(req, res)=>{
    await Destination.updateMany({_id : req.params.id}, req.body)
    res.send({success : true});
})
routes.delete("/:id", async(req, res)=>{
    await Destination.deleteMany({_id : req.params.id})
    res.send({success : true});
})


 



module.exports = routes;