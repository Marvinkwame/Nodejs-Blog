const Category = require("../models/Category");

const createCatgeory = async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCat = await newCategory.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCategory = async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
};

const searchCategory = async (req, res) => {
  const searchTerm = req.query.q;

  try {
    const searchResult = await Category.find({

    })
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = { createCatgeory, getCategory };
