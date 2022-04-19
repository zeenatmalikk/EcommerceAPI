const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
db_url =
  "mongodb+srv://ecommerce:123456abcd@cluster0.wav1d.mongodb.net/ecommerce?retryWrites=true&w=majority";

const DB_CONNECT = async () => {
  try {
    await mongoose.connect(db_url, {
      useNewUrlParser: true,
    });
    console.log("DB CONNECTED SUCCESSFULLY!!");
  } catch (error) {
    console.log(error);
  }
};
DB_CONNECT();
const PORT = 8000;
app.listen(PORT, () => console.log(`PORT NUMBER ${PORT}!`));
