const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!(email && password && username)) {
      return res.status(400).json({ error: "All input fields are required" });
    }

    // Check if the user with the same email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with email already exists. Please log in." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    });

    const savedUser = await newUser.save();

    // return new user
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const handleLogin = async (req, res) => {
  try {
    // Getting user input
    const { email, password } = req.body;

    // Validate user input
    if (!(password && email)) {
      return res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json("Wrong Email");
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json("Wrong Password");
    }

    if (user && checkPassword) {
      const token = jwt.sign(
        { username: user.username, email: user.email },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;
      const { password, ...info } = user._doc;

      // user
      return res.status(200).json(info);
    }

    // This line of code is unreachable because the previous if condition already returned a response.
    return res.status(400).send("Invalid Credentials");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createUser, handleLogin };
