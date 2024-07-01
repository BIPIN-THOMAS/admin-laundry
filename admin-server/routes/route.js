const expess=require("express");
const { createService, listAllservice, deleteService, editService, createProduct, listAllproduct, deleteProduct, editProduct, listAllUsers } = require("../controller/admincontroller");
const { upload } = require("../utils/s3Bucket");


const router=expess.Router();

router.post("/create_service", upload.single('image'),createService);
router.get("/all_service",listAllservice);
router.delete("/delete_service",deleteService);
router.post("/edit_Service",upload.single('image'),editService);

router.post("/create_product",createProduct);
router.get("/all_product",listAllproduct);
router.post("/delete_product",deleteProduct);
router.post("/edit_product",editProduct);

router.get("/list_users",listAllUsers);


module.exports=router;