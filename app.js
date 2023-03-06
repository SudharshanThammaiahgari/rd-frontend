const express=require('express');

const app=express();

const PORT = process.env.PORT || 4000;

app.get("/",function(req,res){
    return res.send("<h1> Hello </h1>");
});

app.get("/:name",function(req,res){
    return res.send("<h1>Hello "+req.params.name+"</h1>");
});

const start=function(){
    app.listen(PORT,function(){
        console.log(" Server Started on http://localhost:"+PORT);
    });
}

start();