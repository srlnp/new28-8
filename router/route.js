var mongoose=require("mongoose");
require("../db/db")
require("dotenv").config();

var bodyParser=require("body-parser")
var express=require("express");
var Market=require("../model/user")

var router=express.Router();
router.use(bodyParser.json())
router.post("/",function(req,res){

    Market.create({
    name:req.body.name,
    city:req.body.city,
    number:req.body.number
}).then(function(resolved){
    res.send(resolved)
    res.end();
}).catch(function(rejected){
    res.send(rejected)
    res.end();
})
})

module.exports=router;