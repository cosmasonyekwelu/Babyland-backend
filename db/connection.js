const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB successfully");
  } catch (err) {
    console.error("MongoDB connection", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
//
//

// ONYECOSMAS
//v2T9G5834fKrKypF
//mongodb+srv://onyecosmas:v2T9G5834fKrKypF@cluster0.l9yve.mongodb.net/Baby-Toys?retryWrites=true&w=majority&appName=Cluster0

//https://babyland-backend-z36w.onrender.com/ | https://git.heroku.com/babyland-backend-z36w.git
