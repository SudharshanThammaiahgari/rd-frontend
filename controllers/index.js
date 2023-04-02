const {validateSchema}=require("../validator/index");
const {v4:uuidv4}=require('uuid');

const users=[
    {
        "login": "Harry Potter",
        "password": "harry123",
        "age": 25,
        "id": "e2184253-9b8e-4fec-80a5-2e2f9cf0f777",
        "isDeleted": false
    },
    {
        "login": "Ron Weasely",
        "password": "ron345",
        "age": 24,
        "id": "7aa7cf5d-1aa5-4e0c-a8c6-9cf86ffe2a60",
        "isDeleted": false
    },
    {
        "login": "Hermoine Granger",
        "password": "herm789",
        "age": 25,
        "id": "356a5303-141d-48ac-8b63-655e4e8ee912",
        "isDeleted": true
    }
];

const findUser = function (req,res){
    const userId=req.params.id;
    try {
        let currUser= users.find(function(user){
            return user.id===userId && user.isDeleted!==true
        });
        if(currUser){
            return res.status(200).json(currUser);
        }else{
            return res.status(400).json({"message":"User does not exist"});
        }
    } catch (error) {
        return res.status(400).json(error);
    }
}


const createUser = function (req,res){
    const userData=req.body;
    userData["id"]=uuidv4();
    userData["isDeleted"]=false;
    // Perform validation of req.body data

    const {error,value} = validateSchema(userData);
    if(error){
        res.status(400).json(error.details);
    }
    else{
        try {
            users.push(value);
            return res.status(200).json(value);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}


const updateUser = function (req,res){
    const userId=req.params.id;
    const userData=req.body;
    try {
        let currUser=users.find(function(user){
            return user.id===userId && user.isDeleted!==true;
        });
        if(currUser && !currUser.isDeleted){
            currUser.login=userData.login || currUser.login;
            currUser.password=userData.password || currUser.password;
            currUser.age=userData.age || currUser.age;
            currUser.isDeleted=userData.isDeleted || currUser.isDeleted;
    
            const {error,value} = validateSchema(currUser);
            if(error){
                return res.status(400).json(error.details);
            }else{
                return res.status(200).json(value);
            }
        }else{
            return res.status(400).json({"message":"User does not exist"});
        }
    } catch (error) {
        return res.status(400).json(error);
    }   
}


const autoSuggestUsers = function (req,res){
    const loginSubstring=req.params.loginSubstring;
    const limit=Number(req.params.limit);
    const matchedUsers=[];
    try {
        users.forEach(function(user){
            if((user.login.includes(loginSubstring)) && (!user.isDeleted)){
                matchedUsers.push(user);
            }
        });
    
        if(matchedUsers.length===0){
            return res.status(400).json({"message":"No users matching the substring"});
        }
        else{        
            matchedUsers.sort(compare);
            return res.status(200).json(matchedUsers.slice(0,limit));
        }

    } catch (error) {
        return res.status(400).json(error);
    }
}

function compare(a,b){
    if(a.login<b.login) return -1;
    if(a.login > b.login) return 1;
    return 0;
}

const deleteUser = function (req,res){
    const userId=req.params.id;
    try {
        let user = users.find(function(user){
            return user.id===userId && user.isDeleted!==true
        });
        if(user && !user.isDeleted){
            user.isDeleted=true;
            return res.status(200).json("Deleted Successfully");
        }else{
            return res.status(400).json({"message":"User does not exist"});
        }
    } catch (error) {
        return res.status(400).json(error);
    }
    
}

module.exports={
    findUser,
    createUser,
    updateUser,
    autoSuggestUsers,
    deleteUser
};