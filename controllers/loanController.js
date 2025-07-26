// controllers/loanController.js
const { v4: uuidv4 } = require('uuid');

exports.lendLoan = (req, res) => {
  res.send('Loan Lend API Hit!');
};

exports.makePayment = (req, res) => {
  res.send('Payment API Hit!');
};

exports.getLedger = (req, res) => {
  res.send(`Ledger for user ${req.params.userId}`);
};

exports.getOverview = (req, res) => {
  res.send('Loan Overview API Hit!');
};

// controllers/loanController.js
exports.lendLoan = (req, res) => {
  res.send("Loan Lend API Hit!");
};
