const express = require('express');
const router = express.Router();

const imageHandler = require('./handler/imageCourse');

router.post('/', imageHandler.create);
router.delete('/:id', imageHandler.destroy);

module.exports = router;