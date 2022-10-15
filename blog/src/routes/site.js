const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/Sitecontroller'); //nhận cái new NewsController vừa xuất ra bởi file Newscontroller.js

// newsController.index => đi vào inndex trong file Newscontroller.js
router.get('/search',SiteController.search) // /:sluq là tất cả tuyến đường khi đi qua news vd http://localhost:3000/news/chi-tiet
router.get('/', SiteController.index);

module.exports = router;