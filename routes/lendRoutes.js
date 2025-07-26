// routes/lendRoutes.js
const express = require('express');
const { lendMoney } = require('../controllers/lendController');

const router = express.Router();

// POST /lend
router.post('/', lendMoney);

module.exports = router;
