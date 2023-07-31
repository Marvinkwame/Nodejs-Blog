const express = require('express');
const router = express.Router();
const { createUser, handleLogin } = require('../controllers/authControllers');


router.post('/register', createUser);
router.post('/login', handleLogin);

module.exports = router;
