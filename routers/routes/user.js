const express = require("express");
const { addNewUser ,addCart,removeCart,checkUser } = require("./../controllers/user");
const userRouter = express.Router();

userRouter.post("/", addNewUser);
userRouter.put("/", addCart);
userRouter.delete("/", removeCart);
userRouter.get("/", checkUser);

module.exports = userRouter;
