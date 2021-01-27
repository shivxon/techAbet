const express = require('express');
const router = express.Router();

const users = require('./api/v1/users/user')


router.use('/api/v1', [users]);

module.exports = router;;