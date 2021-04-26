const express = require('express');
const router = express.Router();

const coursesHandler = require('./handler/course');

router.post('/', coursesHandler.create);
router.put('/:id', coursesHandler.update);
router.get('/:id', coursesHandler.getById);
router.get('/', coursesHandler.getAll);
router.delete('/:id', coursesHandler.destroy);

module.exports = router;