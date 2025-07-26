// routes/paymentRoutes.js
const express = require('express');
const { makePayment } = require('../controllers/paymentController');

const router = express.Router();

// POST /payment
router.post('/', makePayment);

module.exports = router;
