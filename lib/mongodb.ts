import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToMongoDb = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("MISSING MONGODB URL");
  }

  if (isConnected) {
    return console.log("MONGO DB IS ALREADY CONNECTED");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "freed",
    });
    isConnected = true;
    console.log("MONGODB IS CONNECTED");
  } catch (error) {
    console.log("ERROR IN CONNECTING MONGODB: " + error);
  }
};
