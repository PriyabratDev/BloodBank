const express = require('express');
const { testController } = require('../controllers/testCtrl');

//router obj
const router = express.Router();

//route
router.get('/',testController);

//export
module.exports = router;