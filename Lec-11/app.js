const express =  require('express')
const app = express()

const userModel = require('./usermodel');

app.get("/",function(req,res){
    res.send("heyyy")
})

app.get("/create",async function(req,res){

    let createdUser = await userModel.create({
        name: "Manminder",
        username: "mickey",
        email: "xyz@gmail.com"
    })

    res.send(createdUser);
})

app.get("/read",async function(req,res){

    let users = await userModel.find()

    res.send(users);
})

app.get("/update",async function(req,res){

    let updatedUser = await userModel.findOneAndUpdate({username: "mickey"}, {name: "naya Manminderrr"}, {new: true})

    res.send(updatedUser);
})

app.get("/delete",async function(req,res){

    let deletedUser = await userModel.findOneAndDelete({name: "Manminder"})

    res.send(deletedUser);
})

app.listen(3000)