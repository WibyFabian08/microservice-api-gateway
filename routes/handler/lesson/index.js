const create = require('./create');
const update = require('./update');
const getLessonsByChapter = require('./getLessonByChapter');
const getById = require('./getById');
const destroy = require('./destroy');

module.exports = {
    create,
    update,
    getLessonsByChapter,
    getById,
    destroy
}