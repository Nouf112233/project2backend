const express = require("express");
// const multer = require('multer');

// const storage=multer.diskStorage({
//     destination:function(req,file,cd)
//     {
//         cd(null,'./uploads/');
//     },
    
//     filename:function(req,file,cd)
//     {
//         cd(null,newDate().toISOString() + file.originalname)
//     }
    
// })

// const fileFilter = (req,file,cd)=>{
//     if(file.mimetype==='image/jpeg'||file.mimetype==='image/png')
//     {
//         cd(null,true);

//     }else{
//         cd(null,false);
//     }
// };

// const uplood=multer({
//     storage:storage,
//     limits:{fileSize:1024 *1024 *5},
//     fileFilter:fileFilter});
// uplood.single('image'),

const { addProduct,allProduct ,kindProduct,ProductId,productNew,productDiscound,addNotice,getNewProduct,getSaleProduct,setLike,searchProduct} = require("./../controllers/product");
const productRouter = express.Router();

productRouter.post("/",  addProduct);
productRouter.put("/", productNew);
productRouter.put("/dis", productDiscound);
productRouter.put("/not", addNotice);
productRouter.put("/like", setLike);
// userRouter.delete("/", removeCart);
productRouter.get("/", allProduct);
productRouter.get("/kind/:kind",kindProduct);
productRouter.get("/new",getNewProduct);
productRouter.get("/sale",getSaleProduct);
productRouter.get("/id/:id",ProductId);
productRouter.get("/search",searchProduct);


module.exports = productRouter;