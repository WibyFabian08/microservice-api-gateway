const { APP_NAME } = process.env;
const express = require('express');
const router = express.Router();

const usersHandler = require('../routes/handler/users');

const verifyToken = require('../middleware/verifyToken');

/* GET users listing. */
router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);

router.put('/update', verifyToken, usersHandler.updateProfile);
router.get('/', verifyToken, usersHandler.getUser);
router.post('/logout', verifyToken, usersHandler.logout);

module.exports = router;
