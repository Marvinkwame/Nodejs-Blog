const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!(email && password && username)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    });

    const token = jwt.sign(
      { username: username, email: email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    newUser.token = token;
    const savedUser = await newUser.save();

    // return new user
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const handleLogin = async (req, res) => {
  try {
    //Getting user input
    const { username, password } = req.body;

    // Validate user input
    if (!(password && username)) {
      res.status(400).send("All input is required");
    }
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json("Wrong Username");

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) return res.status(400).json("Wrong Password");

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
    return res.status(400).send("Invalid Credentials");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createUser, handleLogin };
