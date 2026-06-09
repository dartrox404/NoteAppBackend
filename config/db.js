const mongoose = require("mongoose");
require("dotenv").config();

const database = async () => {
  try {
    mongoose.connect(process.env.MONGODBURL);
    console.log("Mongodb has been connected successfully!");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports=database;