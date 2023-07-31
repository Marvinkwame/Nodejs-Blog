const Post = require("../models/Post");

//creating a post
const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

//updating a post
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id); //getting the post by id;
    if (post.username === req.body.username) {
      //comparing to see if the creator of the post is the same as the one making the request
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body, //setting everything in the post to the req.body
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only update your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//deleting a post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json("Post not found!");
    }
    if (post.username === req.body.username) {
      try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

///Getting a post
const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json("Post not found!");
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Getting a posts from the db
const getPosts = async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username }); //find by username
    } else if (catName) {
      posts = await Post.find({
        categories: {  //find by category
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find(); //fetch all posts
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createPost, updatePost, deletePost, getPost, getPosts };
