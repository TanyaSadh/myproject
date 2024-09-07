const express = require("express")
const app = express();
const routes = require("./allRoutes/routes");
const cors = require("cors")
const upload = require("express-fileupload")

/*-------Live Server Code (start)---------*/
const root = require("path").join(__dirname, "build");
app.use(express.static(root));
/*-------Live Server Code (end)---------*/

  
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());
app.use(upload());


app.use(routes);

/*-------Live Server Code (start)---------*/
app.get("*", (req, res)=>{
    res.sendFile("index.html", {root});
})
/*-------Live Server Code (end)---------*/

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log("server running with port ", port);
})