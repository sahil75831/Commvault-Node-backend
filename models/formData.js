import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    designation: {
      type: String,
      require: true,
    },
    fullName: {
      type: String,
      require: true,
    },
    personalEmail: {
      type: String,
      require: true,
    },
    officeEmail: {
      type: String,
      require: true,
    },
    mobileNumber: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", formSchema);
export default User;
