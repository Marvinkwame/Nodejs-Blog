const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/userRoutes");
const postRoute = require("./routes/postRoutes");
const categoryRoute = require("./routes/categoryRoutes");

dotenv.config();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

const PORT = process.env.PORT || 3500;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "");
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
//luke 1: 28-29

app.use("/siuu", (req, res) => {
  console.log("Siuuuuu");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", categoryRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
