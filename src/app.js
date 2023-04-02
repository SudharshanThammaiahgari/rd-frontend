const express=require('express');
const userService=require('../routes/index.js');

const app=express();

app.use("/user",userService);

app.use(express.json());

const PORT = process.env.PORT || 4790;

app.get("/",function(req,res){
    res.send("Hello World");
});

const start=function(){
    app.listen(PORT,function(){
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

start();

module.exports=app;