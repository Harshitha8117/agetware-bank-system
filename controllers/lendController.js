// controllers/lendController.js

const { createLoan } = require('../models/loanModel');
const { calculateInterest, calculateEMI } = require('../utils/calculate');

exports.lendMoney = (req, res) => {
  const { customerId, principal, period, rate } = req.body;

  if (!customerId || !principal || !period || !rate) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const interest = calculateInterest(principal, period, rate);
  const totalAmount = principal + interest;
  const emi = calculateEMI(totalAmount, period);

  const loan = createLoan(customerId, principal, period, rate, totalAmount, emi);

  res.status(201).json({
    message: 'Loan created successfully.',
    loanId: loan.loanId,
    totalAmount,
    emi,
  });
};
