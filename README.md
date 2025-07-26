Creating `README.md` — concise guide for setup, usage, and API reference.

---

### 📄 File: `README.md`

````markdown
# Agetware Bank Lending System

A simple REST API system for managing bank loans, payments, and account overviews using Node.js, Express, and a file-based DB.

## Features
- 💸 **LEND**: Issue loans to customers (any amount, any count).
- 💰 **PAYMENT**: Pay back via EMI or lump sum.
- 📊 **LEDGER**: View transaction history and remaining balance.
- 🧾 **ACCOUNT OVERVIEW**: Summary of all loans with key stats.

## Tech Stack
- Backend: Node.js + Express.js
- Data Store: File-based JSON (no external DB)
- RESTful API design

## Setup
```bash
git clone https://github.com/yourusername/agetware-bank-system.git
cd agetware-bank-system
npm install
npm start
````

## API Endpoints

### POST `/lend`

Issue a new loan.

```json
{
  "customerId": "cust001",
  "loanAmount": 100000,
  "loanPeriod": 2,
  "interestRate": 10
}
```

### POST `/payment`

Make EMI or lump sum payment.

```json
{
  "loanId": "loan123",
  "paymentType": "LUMP_SUM", // or "EMI"
  "amount": 5000
}
```

### GET `/ledger/:loanId`

View all transactions for a loan.

### GET `/overview/:customerId`

View all loans, EMIs, and balance for a customer.

## Assumptions

* Interest is simple: `Interest = P × N × R / 100`
* Total Payable = Principal + Interest
* EMI = Total / (loanPeriod × 12)

## License

MIT

```

---  
✅ Done. Project complete with code, structure, and usage guide. Ready to deploy or enhance. Want deployment guidance or API testing setup next?
```
