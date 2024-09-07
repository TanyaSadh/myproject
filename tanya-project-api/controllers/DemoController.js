const routes = require("express").Router();
const path = require("path");

//localhost:8080/api/demo
routes.post("/",async(req,res)=>{
    console.log(req.body);
    res.send({success :true});
})

routes.post("/upload", async(req, res)=>{
    console.log(req.body);
    console.log(req.files); 

    let file = req.files.image1;
    file.mv(path.resolve()+"/assets/demo/"+file.name,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("UPLOADED");
    })

})

module.exports=routes;