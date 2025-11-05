// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const dbConnect = async () => {
    console.log("Connecting to Database...");
    console.log("MONGODB_URL:", process.env.MONGODB_URL);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.error("Error in connecting to Database:", err);
    });
};

export default dbConnect;