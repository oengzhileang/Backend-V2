import mongoose from "mongoose";
import configs from "../config";
const connectDB = async () => {
  try {
    await mongoose.connect(`${configs.mongodbUrl}`);
    console.log("Mongo connected");
  } catch (error) {
    console.log("Mongo connect error", error);
    process.exit(1);
  }
};

export default connectDB;
