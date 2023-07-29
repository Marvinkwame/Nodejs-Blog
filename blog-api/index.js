const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 3500;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/siuu", (req, res) => {
  console.log("Siuuuuu");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
