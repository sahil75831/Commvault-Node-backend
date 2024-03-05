import mongoose from "mongoose";
import dotenv from "dotenv/config";
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to database.."))
  .catch((err) => console.log("connection error"));
