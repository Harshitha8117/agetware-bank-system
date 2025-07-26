// controllers/overviewController.js
const { getLoansByCustomer } = require('../models/loanModel');

// GET /overview/:customer_id
function getAccountOverview(req, res) {
  const { customer_id } = req.params;

  const loans = getLoansByCustomer(customer_id);
  if (loans.length === 0) {
    return res.status(404).json({ error: 'No loans found for this customer.' });
  }

  const overview = loans.map(loan => {
    const total_interest = loan.total_amount - loan.principal;
    const amount_paid = loan.paid_amount;
    const emi_left = Math.max(0, loan.total_emi - loan.emi_paid);

    return {
      loan_id: loan.loan_id,
      principal: loan.principal.toFixed(2),
      total_amount: loan.total_amount.toFixed(2),
      total_interest: total_interest.toFixed(2),
      emi: loan.emi.toFixed(2),
      amount_paid: amount_paid.toFixed(2),
      emi_left
    };
  });

  res.json({ customer_id, loans: overview });
}

module.exports = { getAccountOverview };
