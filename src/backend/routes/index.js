const express = require('express');
const router = express.Router();

const employees = require('./api/v1/users/employee')


router.use('/api/v1', [employees]);

module.exports = router;;