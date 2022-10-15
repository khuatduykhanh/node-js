const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/Mecontroller'); //nhận cái new NewsController vừa xuất ra bởi file Newscontroller.js

// GET /course/:slug
router.get('/store/course',meController.storeCourse);
router.get('/deleted/course',meController.deletedCourse);
module.exports = router;