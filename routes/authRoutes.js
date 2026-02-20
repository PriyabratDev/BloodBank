const express = require('express');
const { registerController,loginController } = require('../controllers/authController');

const router = express.Router();

//routes - localhost:8080/api/v1/auth
router.post('/register', registerController);   //  register user - POST
router.post('/login', loginController);      //  login user - POST
module.exports = router;