var mongoose=require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.mongouri)/*.then(function(resolved)
{
    console.log(resolved)
}).catch(function(rejected){
    console.log(rejected)
})*/