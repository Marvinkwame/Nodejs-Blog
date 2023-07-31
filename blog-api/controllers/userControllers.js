const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    //checking if we are sending password to the body then hash itc
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        //what we want to update
        {
          $set: req.body, //we want to set everything basically
        },
        { new: true }
      );
      res.status(200).send(updateUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    return res
      .status(401)
      .send("You are not authorized to perform this action");
  }
};

const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id); //finding the user by id in the link
      try {
        await Post.deleteMany({ username: user.username }); //deleting all their posts from the db by using their username
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
};

//GET USER

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...details } = user._doc;
        res.status(200).json(details);
      } catch (err) {
        res.status(500).json(err);
      }    
}

module.exports = { updateUser, deleteUser, getUser };
