var mongoose=require("mongoose");
var Schema=mongoose.Schema;
let Market=new Schema({
    name:String,
    city:String,
    number:Number
})
module.exports=mongoose.model("Market",Market)