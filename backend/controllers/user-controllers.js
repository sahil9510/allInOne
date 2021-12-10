const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const HttpError=require('../models/http-error');
const User= require('../models/user');



const register=async(req,res,next)=>{
    
    const {email,name,password}=req.body;
    let existingUser;
    try{
        existingUser= await User.findOne({email: email});
        console.log(existingUser);
    }catch(err){
        return next(new HttpError("Something went wrong",500));
    }
    if(existingUser){
        return next(new HttpError("User already exists",420));
    }
    let hashedPassword;
    try{
        hashedPassword= await bcrypt.hash(password,12);
    }catch(err){
        return next(new HttpError("Something Went Wrong",500));
       
    }

    const createdUser = new User({
        name: name,
        email: email,
        password: hashedPassword,
        notes: []
    });
    let result;
    try{
    result = await createdUser.save();
    }catch(err){
        return next(new HttpError("Somethign went wrong",500));
        
    }

    let token;
    try{
        token = jwt.sign({userId: createdUser.id, email: createdUser.email},process.env.JWT_TOKEN,{expiresIn: "1h"});
    }catch(err){
        return next(new HttpError("Something went wrong",500));
      
    }
    res.status(201).json({name:createdUser.name,userId: createdUser.id,email: createdUser.email,token: token});
}



const login = async(req,res,next)=>{
    const {email,password}=req.body;
    console.log("User here ");
    let foundUser;
    try{
    foundUser = await User.findOne({email: email}).exec();
    }catch(err){
        return next(new HttpError("Something went wrong",500));
    }
    if(!foundUser){
        return next(new HttpError("User Not Found",401))
    }


    let isValidPassword = false;
    try{
        isValidPassword = await bcrypt.compare(password,foundUser.password);
    }catch(err){
        return next(new HttpError("Something went wrong",500));
    }
    if(!isValidPassword){
    return next(new HttpError("Credentials are wrong",401));
    }

    let token;
    try{
        token = jwt.sign({userId: foundUser.id,email: foundUser.email},process.env.JWT_TOKEN,{expiresIn:"1h"});
    }catch(err){
        return next(new HttpError("Something Went Wrong",500));
    }

    console.log("Authorised");
    return res.status(201).json({name:foundUser.name,userId:foundUser.id, email:foundUser.email,token:token});
}

exports.registerUser=register;
exports.loginUser = login;