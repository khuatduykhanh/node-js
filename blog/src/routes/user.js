const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/Usercontroller'); //nhận cái new NewsController vừa xuất ra bởi file Newscontroller.js

// GET /course/:slug
router.get('/login',userController.login);
router.get('/registration',userController.registration);
router.post('/store',userController.store);
module.exports = router;