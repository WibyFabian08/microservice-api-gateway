const { APP_NAME } = process.env;
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(APP_NAME);
});

module.exports = router;
