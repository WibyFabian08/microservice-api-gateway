const express = require('express');
const router = express.Router();

// get method
router.get('/', function(req, res, next) {
    res.send('This is courses service');
});

module.exports = router;