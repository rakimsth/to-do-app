const router = require('express').Router();

const subTaskApi = require('../modules/subtasks/subtask.routes.api');
const toDoApi = require('../modules/toDos/todo.routes.api');

router.use('/subtasks', subTaskApi);
router.use('/todos', toDoApi);

module.exports = router;
