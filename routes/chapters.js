const express = require('express');
const router = express.Router();

const chaptersHandler = require('./handler/chapter');

router.post('/', chaptersHandler.create);
router.put('/:id', chaptersHandler.update);
router.get('/', chaptersHandler.getByCourseId);
router.get('/:id', chaptersHandler.getById);
router.delete('/:id', chaptersHandler.destroy);

module.exports = router;