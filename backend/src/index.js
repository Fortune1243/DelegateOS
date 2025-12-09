const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const committeesRouter = require('./api/committees');
app.use('/committees', committeesRouter);

app.get('/', (req, res) => {
  res.json({ status: "ok", service: "DelegateOS backend", version: "1.0.0" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("DelegateOS backend running on port " + PORT);
});
