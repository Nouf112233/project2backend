const express = require("express");
const multer = require('multer');

const storage=multer.diskStorage({
    destination:function(req,file,cd)
    {
        cd(null,'./uploads/');
    },
    
    filename:function(req,file,cd)
    {
        cd(null,newDate().toISOString() + file.originalname)
    }
    
})

const fileFilter = (req,file,cd)=>{
    if(file.mimetype==='image/jpeg'||file.mimetype==='image/png')
    {
        cd(null,true);

    }else{
        cd(null,false);
    }
};

const uplood=multer({
    storage:storage,
    limits:{fileSize:1024 *1024 *5},
    fileFilter:fileFilter});


const { addNewUser ,addCart,removeCart,checkUser } = require("./../controllers/user");
const userRouter = express.Router();

userRouter.post("/", addNewUser);
userRouter.put("/", addCart);
userRouter.delete("/", removeCart);
userRouter.get("/", checkUser);

module.exports = userRouter;