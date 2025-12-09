const express = require('express');
const router = express.Router();

const { getCommittees } = require('../controllers/committeeController');

router.get('/', getCommittees);

module.exports = router;
