// routes/loanRoutes.js
const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

// Example POST route
router.post('/lend', loanController.lendLoan);
router.post('/payment', loanController.makePayment);
router.get('/ledger/:userId', loanController.getLedger);
router.get('/overview', loanController.getOverview);

module.exports = router;

