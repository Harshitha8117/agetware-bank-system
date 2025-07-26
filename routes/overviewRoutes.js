// routes/overviewRoutes.js
const express = require('express');
const { getOverview } = require('../controllers/overviewController');

const router = express.Router();

// GET /overview/:customerId
router.get('/:customerId', getOverview);

module.exports = router;
