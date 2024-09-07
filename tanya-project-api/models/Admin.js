require("../config/db");

const mongoose = require("mongoose");

let AdminSchema = mongoose.Schema({
    username : String,
    password: String
})

module.exports = mongoose.model("admin", AdminSchema)