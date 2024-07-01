const mongoose=require("mongoose");
const ProductScheema=mongoose.Schema({
image:{
    type:String,
    required:true,
},
price:{
    type:String,
    required:true,
},
productname:{
    type:String,
    required:true,
},


});
const Product=mongoose.model("products",ProductScheema);
module.exports=Product;
