const services=require('../../services/index.js')

async function findOne(req,res){
    const userId=req.params.id;
    try {
        const user=await services.findUser(userId);
        if(user && !user.isDeleted){
            return res.status(200).json(user);
        }else{
            return res.status(400).json({"message":"User does not exist"});
        }
    } catch (error) {
        return res.status(400).json({"message":"Error in finding user"})
    }
}

async function createUser(req,res){
    const userData=req.body;
    try {
        const newUser = await services.createUser(userData);
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(400).json(error.errors[0].message);
    }
}

async function updateUser(req,res){
    const userData=req.body;
    const userId=req.params.id;
    try {
        const user=await services.updateUser(userId,userData);
        if(user && !user.isDeleted){
            return res.status(200).json(user);
        }
        else{
            return res.status(400).json({"message":"User does not exist"});
        }
    } catch (error) {
        return res.status(400).json({"message":"Error in updating user"})
    }
}

async function deleteUser(req,res){
    // Soft deleting the user
    const userId=req.params.id;
    try {
        const user=await services.deleteUser(userId);
        if(user && user.isDeleted){
            return res.status(200).json({"message":"User Deleted successfully."});
        }else{
            return res.status(400).json({"message":"User does not exist"});
        }
    } catch (error) {
        return res.status(400).json({"message":"Error in deleting user"})
    }
}

async function getAutoSuggestUsers(req,res){
    const subString=req.params.subString;
    const limit = req.params.limit;
    try {
        const users=await services.getAutoSuggestUsers(subString,limit);
        if(users){
            return res.status(200).json(users);
        }else{
            return res.status(400).json({"message":"Users does not exist"});
        }
    } catch (error) {
        return res.status(400).json({"message":"Error in retreiving auto suggestions"})
    }
}

module.exports={
    findOne,
    createUser,
    updateUser,
    deleteUser,
    getAutoSuggestUsers
}