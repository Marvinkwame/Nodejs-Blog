const express = require('express');
const router = express.Router();
const { updateUser, deleteUser, getUser } = require('../controllers/userControllers');

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);



module.exports = router;