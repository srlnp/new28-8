var express=require("express");
var app=express();
require("./db/db")
app.get("/",(req,res)=>{
    res.send("welcome mr s rama laxmi narayan patro")

});
app.use("/newCustomer",require("./router/route"))
app.listen("3333",function(){
    console.log("server listning port no 3333")
})