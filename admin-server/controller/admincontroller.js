const Admin = require("../model/admin");
const Product = require("../model/products");
const Service = require("../model/services");
const User = require("../model/user");

//API for createserver

exports.createService = async (req, res) => {
    console.log("reqbody=", req.body);
    console.log("req file=", req.file);

    console.log("req file=", req.file);


    const {servicename}= req.body;
    try {
        const existingService=await Service.findOne({servicename});
        if(existingService){
            res.status(400).json({error: true,status:false, message: "service  already available" });
            return;
        }
        const newservice=new Service({servicename,image:req.file.location});
        await newservice.save()
        res.status(200).json({ error: false,status:true, message: "services available", data: newservice })
        }
       
    
     catch(error) {
        console.log(error);
         res.status(400).json({ error: true,status:false, message: "Server Error" });
    }
};


//API for List all services
exports.listAllservice=async(req,res)=>{
    try {
        const services = await Service.find();
        res.status(200).json({ error: false,status:true, message: "service available", data: services })
    } catch (error) {
        
        res.status(400).json({  error: true,status:false, message: "Server Error" });
    }
};


//API for delete services

exports.deleteService = async (req, res) => {
    const { id } = req.query;

    try {
       
        const deletedService = await Service.findByIdAndDelete(id);

        if (!deletedService) {
            res.status(404).json({ error: true, status: false, message: "Service not deleted" });
            return;
        }

        res.status(200).json({ error: false, status: true, message: "Service deleted successfully", data: deletedService });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: true, status: false, message: "Server Error" });
    }
};

//API for edit service

exports.editService = async (req, res) => {
    const { id } = req.query;
    const { servicename } = req.body;

    try {
        const existingService = await Service.findById(id);
        
        if (!existingService) {
            res.status(404).json({ error: true, status: false, message: "Service not found" });
            return
        }
        
        existingService.servicename = servicename;
        await existingService.save();

            if (req.file && req.file.location) {
                existingService.image = req.file.location;
                await existingService.save();
            }


        res.status(200).json({ error: false, status: true, message: "Service updated successfully", data:  existingService });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: true, status: false, message: "Server Error" });
    }
};






//API for createproduct

exports.createProduct = async (req, res) => {
    console.log("reqbody=", req.body);
    const {productname,price}= req.body;
    try {
        const existingProduct=await Product.findOne({productname});
        if(existingProduct){
            res.status(400).json({error: true,status:false, message: "product  already available" });
            return
        }
        const newsproduct=new Product({productname,price,image:req.file.filename});
        await newsproduct.save()
        res.status(200).json({ error: false,status:true, message: "product available", data: newsproduct })
        }
        
     catch(error) {
        console.log(error);
         res.status(400).json({ error: true,status:false, message: "Server Error" });
    }
};


//API for List all Products
exports.listAllproduct=async(req,res)=>{
    console.log("reqbody=", req.body);
    try {
      
        const products = await Product.find();
        
        res.status(200).json({ error: false,status:true, message: "product available", data:products })
    } catch (error) {
        
        res.status(400).json({  error: true,status:false, message: "Server Error" });
    }
};


//API for delete product

exports.deleteProduct = async (req, res) => {
    const { id } = req.query;

    try {
       
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            res.status(404).json({ error: true, status: false, message: "Product not deleted" });
            return;
        }

        res.status(200).json({ error: false, status: true, message: "Product deleted successfully", data: deletedProduct });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: true, status: false, message: "Server Error" });
    }
};

//API for edit product

exports.editProduct = async (req, res) => {
    const { id } = req.query;
    const { productname, price } = req.body;

    try {
        const existingProduct = await Product.findById(id);
        
        if (!existingProduct) {
            res.status(404).json({ error: true, status: false, message: "Product not found" });
            return
        }
            existingProduct.productname = productname;
            existingProduct.price = price;

            await existingProduct.save();

            if (req.file && req.file.filename) {
                existingProduct.image = req.file.filename;
                await existingProduct.save();
            }


        res.status(200).json({ error: false, status: true, message: "Product updated successfully", data:  existingProduct });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: true, status: false, message: "Server Error" });
    }
};


//API for list all users

exports.listAllUsers = async (req, res) => {
    console.log("reqbody=", req.body);
    try {
        const users = await User.find();
        res.status(200).json({ error: false, status: true, message: "Users  are available", data: users });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: true, status: false, message: "Server Error" });
    }
};








