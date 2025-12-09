const express = require('express');
const cors = require('cors');
const committeesRouter = require('./api/committees');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(committeesRouter);

app.get('/', (req, res) => {
  res.send('DelegateOS backend running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
