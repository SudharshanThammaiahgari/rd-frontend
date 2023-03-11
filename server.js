const express=require('express');
const authenticate=require('./data-access/authenticate.js');
const sequelize=require('./data-access/database.js');
const userService=require('./routers/user.routes.js');
require('./models/model.js');

const app=express();
const PORT=process.env.PORT || 4690;

app.use(express.json());

app.use('/user',userService);

app.get("/",function(req,res){
    res.send("Hello World");
});

sequelize.sync({force:true}).then(function(){
    console.log("Synced db.");
}).catch(function(err){
    console.log("Failed to sync db : ",err.message);
});

app.listen(PORT,function(){
    authenticate()
    .then(()=>console.log("Listening on http://localhost:"+PORT))
    .catch((err)=> console.log(err));
});

