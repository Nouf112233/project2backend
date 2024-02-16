const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const db = require("./db/db.js");

//instatiation exp
const app = express();

//instatiation routers
// const productRouter = require("./routers/routes/product");
const userRouter = require("./routers/routes/user");
const productRouter=require("./routers/routes/product");
const clubRouter=require("./routers/routes/club")
//config enviroment varible
dotenv.config();

//built-in level middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routers middleware
// app.use("/todos", todoRouter);
app.use("/user", userRouter);
app.use("/product",productRouter);
app.use("/club",clubRouter);

//listen port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
