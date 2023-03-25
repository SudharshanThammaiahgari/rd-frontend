const User=require('../models/model.js')
const { v4: uuidv4 } = require('uuid');
const { Op } = require("sequelize");

const createUser=async function(userData){
    const newUser = await User.create({
        id:uuidv4(),
        login:userData.login,
        password:userData.password,
        age:userData.age,
        isDeleted:false
    });
    return newUser;
}

const findUser= async function(userId){
    const user = await User.findOne({where:{id:userId}});
    return user;
}

const updateUser= async function(userId,userData){
    const user=await User.findByPk(userId);
    if(user && !user.isDeleted){
        user.login=userData.login;
        user.password=userData.password;
        user.age=userData.age;
        user.isDeleted=userData.isDeleted;
        await user.save();
    }
    return user;
}

const deleteUser=async function(userId){
    const user=await User.findByPk(userId);
    if(user && !user.isDeleted){
        user.isDeleted=true;
        await user.save();
    }
    return user;
}

const getAutoSuggestUsers=async function(subString,limit){
    const users=await User.findAll({
        where:{
            login: {
                [Op.substring]:subString
            },
            isDeleted:false
        },
        limit:limit
    });
    return users;
}

module.exports={
    createUser,
    findUser,
    updateUser,
    deleteUser,
    getAutoSuggestUsers
}