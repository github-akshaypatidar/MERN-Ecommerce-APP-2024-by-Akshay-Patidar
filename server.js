// const express= require('express'); type:common js
// const colors= require('colors');
// const dotenv=require('dotenv');

import express from "express"; //type:module es6
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

//Configuring path of env file if in root leave empty
dotenv.config();

//DB config
connectDB();

const PORT = process.env.PORT;

//rest object
const app = express();

//middleware
app.use(express.json());
// app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"));

//Routes
app.use("/api/v1/auth", authRoutes);

//rest api

app.get("/", (req, res) => {
  return res.send("<h1>Ecommerce App homepage</h1>");
});

app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`.bgCyan.white);
});
