/ Step 1: package.json is done.
// Now: app.js (Main Express app setup)

const express = require('express');
const app = express();
const lendRoutes = require('./routes/lendRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const ledgerRoutes = require('./routes/ledgerRoutes');
const overviewRoutes = require('./routes/overviewRoutes');

app.use(express.json());

// API Routes
app.use('/lend', lendRoutes);
app.use('/payment', paymentRoutes);
app.use('/ledger', ledgerRoutes);
app.use('/overview', overviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bank System API running on port ${PORT}`);
});
