var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var morgan = require("morgan");

var app = express();
var port = 8081;

app.use(morgan("combined"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.get("/stat",function(req,res){
    res.json({name:"abdul"});
})

// app.listen(8080);
// app.listen(8080);

app.listen(process.env.port|| 8080,function(){
    console.log("");
    console.log("listening on port 8080");
})