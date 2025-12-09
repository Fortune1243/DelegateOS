const committees = require('../models/committee');

exports.getCommittees = (req, res) => {
  res.json(committees);
};
