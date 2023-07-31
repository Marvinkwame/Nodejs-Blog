const express = require('express');
const router = express.Router();
const { createCatgeory, getCategory } = require('../controllers/categoriesControllers');

router.post('/', createCatgeory);
router.get('/', getCategory);


module.exports = router;
