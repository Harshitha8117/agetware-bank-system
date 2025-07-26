// routes/ledgerRoutes.js
const express = require('express');
const { getLedger } = require('../controllers/ledgerController');

const router = express.Router();

// GET /ledger/:loanId
router.get('/:loanId', getLedger);

module.exports = router;
