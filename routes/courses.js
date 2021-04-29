const express = require('express');
const router = express.Router();

const coursesHandler = require('./handler/course');

const verifyToken = require('../middleware/verifyToken');
const can = require('../middleware/permission');

router.get('/:id', coursesHandler.getById);
router.get('/', coursesHandler.getAll);

router.post('/', verifyToken, can('admin'), coursesHandler.create);
router.put('/:id', verifyToken, can('admin'), coursesHandler.update);
router.delete('/:id', verifyToken, can('admin'), coursesHandler.destroy);

module.exports = router;