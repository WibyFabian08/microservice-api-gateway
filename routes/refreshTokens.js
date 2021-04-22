const express = require('express');
const router = express.Router();

const refreshTokenHandler = require('./handler/refresh-tokens');

// post method
router.post('/',  refreshTokenHandler.refreshToken);

module.exports = router;