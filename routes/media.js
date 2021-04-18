const {APP_NAME} = process.env;
const express = require('express');
const router = express.Router();

// get method
router.get('/', function(req, res, next) {
    res.send('This is media service');
});

module.exports = router;