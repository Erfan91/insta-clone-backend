const UserModel = require("../models/UserModel");
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const passport = require('passport');
// const { response } = require("express");

module.exports.userPost = (req,res,next)=>{
    const body = req.body;
    UserModel.findOne({username: body.username})
    .exec()
    .then(result=>{
        if(result){
            console.log(result)
            res.json({issue: true})
            return
        }
        if(!result){
            UserModel.findOne({email: body.email})
            .exec()
            .then(response=>{
                console.log(response, "With email")
                if(response){
                    res.json({issue: false})
                }
                if(!response){
                    UserModel.create(body)
                    .then(result=>{
                        console.log(result)
                        res.json(result)
                    })
                }
            })
        }
    })
}

module.exports.userGet = (req,res,next)=>{
    UserModel.find()
    .exec()
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.userUpdate = (req,res,next)=>{
    const body = req.body;
    UserModel.updateOne({firstName:"Erfan"}, {firstName:body.firstName})
    .then(result=>{
        console.log(result)
        res.json(result)
    })
}

module.exports.userDelete = (req,res,next)=>{
    const body = req.body
    UserModel.deleteOne({firstName:body.firstName})
    .then(result=>{
        console.log(result)
        res.json({message: "user deleted !"})
    })
}