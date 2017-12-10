var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var morgan = require("morgan");

var app = express();

app.use(morgan("combined"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.post("/register",function(req,res){
    res.json(req.body);
})

app.listen(process.env.port|| 8080,function(){
    console.log("");
    console.log("listening on port 8080");
})