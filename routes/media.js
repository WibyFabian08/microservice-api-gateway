const express = require('express');
const router = express.Router();

const mediaHandler = require('./handler/media');

// post method
router.post('/',  mediaHandler.create);
router.get('/', mediaHandler.getAll);
router.get('/:id', mediaHandler.getById);
router.delete('/:id', mediaHandler.destroy);

module.exports = router;