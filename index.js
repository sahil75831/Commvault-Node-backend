import express, { urlencoded } from "express";
import dotenv from "dotenv/config";
import cors from "cors";
const app = express();
const PORT = process.env.PORT;
import "./db/db.js";
import User from "./models/formData.js";

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/form-data", async (req, res) => {
  const {
    designation,
    fullName,
    mobileNumber,

    personalEmail,
    officeEmail,
  } = req.body;
  console.log("req.nbodyu ", req.body);
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({ message: "Registration successful 😊😊" });
  } catch (error) {
    console.log("error : ", error);
  }
});

app.listen(PORT, () => {
  console.log("app is listening at port : ", PORT);
});
