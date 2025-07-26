// models/loanModel.js

const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const dbPath = path.join(__dirname, '../data/db.json');

function readDB() {
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ loans: [] }, null, 2));
  }
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
}

function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

function createLoan(customerId, principal, period, rate, totalAmount, emi) {
  const db = readDB();
  const loanId = uuidv4();

  const newLoan = {
    loanId,
    customerId,
    principal,
    period,
    rate,
    interest: parseFloat((totalAmount - principal).toFixed(2)),
    totalAmount,
    emi,
    amountPaid: 0,
    emiLeft: period * 12,
    transactions: [],
  };

  db.loans.push(newLoan);
  writeDB(db);
  return newLoan;
}

function getLoan(loanId) {
  const db = readDB();
  return db.loans.find(loan => loan.loanId === loanId);
}

function getLoansByCustomer(customerId) {
  const db = readDB();
  return db.loans.filter(loan => loan.customerId === customerId);
}

function recordPayment(loanId, amount, type) {
  const db = readDB();
  const loan = db.loans.find(loan => loan.loanId === loanId);
  if (!loan) return null;

  loan.amountPaid += amount;
  if (type === 'EMI') {
    loan.emiLeft -= 1;
  } else if (type === 'LUMP_SUM') {
    const balance = loan.totalAmount - loan.amountPaid;
    loan.emiLeft = Math.ceil(balance / loan.emi);
  }

  loan.transactions.push({
    transactionId: uuidv4(),
    date: new Date().toISOString(),
    amount,
    type,
  });

  writeDB(db);
  return loan;
}

module.exports = {
  createLoan,
  getLoan,
  getLoansByCustomer,
  recordPayment,
};
