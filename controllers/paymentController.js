// controllers/paymentController.js
const { getLoanById, updateLoan } = require('../models/loanModel');

// POST /payment
function makePayment(req, res) {
  const { loan_id, payment_type, amount } = req.body;

  if (!loan_id || !payment_type || !amount) {
    return res.status(400).json({ error: 'loan_id, payment_type, and amount are required.' });
  }

  const loan = getLoanById(loan_id);
  if (!loan) {
    return res.status(404).json({ error: 'Loan not found.' });
  }

  const payment = parseFloat(amount);
  let message = '';

  if (payment_type === 'EMI') {
    if (payment < loan.emi) {
      return res.status(400).json({ error: 'EMI payment must be at least the EMI amount.' });
    }
    loan.paid_amount += payment;
    loan.emi_paid += 1;
    message = `EMI payment of ₹${payment} received.`;
  } else if (payment_type === 'LUMP_SUM') {
    loan.paid_amount += payment;
    message = `Lump sum payment of ₹${payment} received.`;
  } else {
    return res.status(400).json({ error: 'Invalid payment_type. Use EMI or LUMP_SUM.' });
  }

  // Add transaction
  loan.transactions.push({
    date: new Date().toISOString(),
    type: payment_type,
    amount: payment
  });

  updateLoan(loan);

  res.json({
    message,
    total_paid: loan.paid_amount,
    balance: loan.total_amount - loan.paid_amount
  });
}

module.exports = { makePayment };

