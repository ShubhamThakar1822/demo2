var express = require ("express");
var app = express();
app.get("/",function(req,resp){
    resp.send("hello to all");
})
app.listen(3000);
console.log("server is going------")