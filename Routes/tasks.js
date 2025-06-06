const express = require('express')
const {getAllTasks,createTask,getTask,updateTask,deleteTask} = require('../Controller/tasks.js');
const router = express.Router();

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;