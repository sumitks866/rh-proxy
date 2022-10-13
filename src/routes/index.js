const express = require('express');
const router = express.Router();
const getColleges = require('./collegeslist');

router.use('/colleges', getColleges);

module.exports = router;