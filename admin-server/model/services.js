const mongoose=require("mongoose");
const serviceScheema=mongoose.Schema({
image:{
    type:String,
    required:true,
},
servicename:{
    type:String,
    required:true,
},


});
const Service=mongoose.model("services",serviceScheema);
module.exports=Service;

