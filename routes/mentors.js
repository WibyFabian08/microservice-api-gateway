const express = require('express');
const router = express.Router();

const mentorsHandler = require('./handler/mentor');

router.post('/', mentorsHandler.create);
router.put('/:id', mentorsHandler.update);
router.get('/:id', mentorsHandler.getById);
router.get('/', mentorsHandler.getAll);
router.delete('/:id', mentorsHandler.destroy);

module.exports = router;