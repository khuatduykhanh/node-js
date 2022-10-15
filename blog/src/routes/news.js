const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/Newscontroller'); //nhận cái new NewsController vừa xuất ra bởi file Newscontroller.js

// newsController.index => đi vào inndex trong file Newscontroller.js
router.get('/:slug',newsController.show) // /:sluq là tất cả tuyến đường khi đi qua news vd http://localhost:3000/news/chi-tiet
router.get('/', newsController.index);

module.exports = router;