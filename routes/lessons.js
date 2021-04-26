const express = require('express');
const router = express.Router();

const lessonsHandler = require('./handler/lesson');

router.post('/', lessonsHandler.create);
router.put('/:id', lessonsHandler.update);
router.get('/', lessonsHandler.getLessonsByChapter);
router.get('/:id', lessonsHandler.getById);
router.delete('/:id', lessonsHandler.destroy);

module.exports = router;