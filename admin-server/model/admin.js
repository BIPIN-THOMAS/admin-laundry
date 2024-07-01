const mongoose=require("mongoose");
const userScheema=mongoose.Schema({
email:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
},


});
const Admin=mongoose.model("admins",userScheema);
module.exports=Admin;

