require("dotenv").config();

const mongoose = require("mongoose");

// after importing mongoose and env we create a schema in our models

const productModel = require("./models/Product");

const productAPI = require("./json/products.json");

const upload = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Database Connected");

    console.log("Deleting previous products....");

    await productModel.deleteMany();

    console.log("Previous products deleted successfully");

    console.log("Uploading Products or updated producted");

    try {
      await productModel.create(productAPI);

      console.log(productAPI);

      console.log("Products uploaded successfully");
    } catch (creationError) {
      console.error("Error uploading products:", creationError);
    }

    process.exit(0);
  } catch (error) {
    console.error("Error:", error.message);

    console.log("Unable to connect");

    process.exit(1);
  }
};

upload();
