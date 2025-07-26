// utils/calculations.js
function calculateInterest(P, N, R) {
  return (P * N * R) / 100;
}

function calculateTotalAmount(P, I) {
  return P + I;
}

function calculateEMI(A, N) {
  return +(A / (N * 12)).toFixed(2);
}

module.exports = { calculateInterest, calculateTotalAmount, calculateEMI };
// utils/calculate.js

function calculateInterest(P, N, R) {
  // I = P * N * R / 100
  const interest = (P * N * R) / 100;
  return parseFloat(interest.toFixed(2));
}

function calculateTotalAmount(P, N, R) {
  const interest = calculateInterest(P, N, R);
  const totalAmount = P + interest;
  return {
    totalAmount: parseFloat(totalAmount.toFixed(2)),
    interest,
  };
}

function calculateEMI(totalAmount, loanPeriodYears) {
  const totalMonths = loanPeriodYears * 12;
  const emi = totalAmount / totalMonths;
  return parseFloat(emi.toFixed(2));
}

function recalculateEMIsAfterLumpSum(totalAmountRemaining, monthlyEMI) {
  const emiLeft = Math.ceil(totalAmountRemaining / monthlyEMI);
  return emiLeft;
}

module.exports = {
  calculateInterest,
  calculateTotalAmount,
  calculateEMI,
  recalculateEMIsAfterLumpSum,
};
