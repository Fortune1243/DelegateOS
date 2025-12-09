const express = require('express');
const { getCommittees } = require('../controllers/committeeController');

const router = express.Router();

router.get('/committees', getCommittees);

module.exports = router;
