// controllers/ledgerController.js
const { getLoanById } = require('../models/loanModel');

// GET /ledger/:loan_id
function getLedger(req, res) {
  const { loan_id } = req.params;

  const loan = getLoanById(loan_id);
  if (!loan) {
    return res.status(404).json({ error: 'Loan not found.' });
  }

  const balance = loan.total_amount - loan.paid_amount;
  const emi_left = Math.max(0, loan.total_emi - loan.emi_paid);

  res.json({
    loan_id: loan.loan_id,
    customer_id: loan.customer_id,
    transactions: loan.transactions,
    balance: balance.toFixed(2),
    monthly_emi: loan.emi.toFixed(2),
    emi_left
  });
}

module.exports = { getLedger };

