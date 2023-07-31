const express = require('express');
const router = express.Router();
const { createPost, updatePost, deletePost, getPost, getPosts } = require('../controllers/postControllers')

router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/:id", getPost);
router.get("/", getPosts);

module.exports = router;