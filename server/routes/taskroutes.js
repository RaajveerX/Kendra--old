const express = require('express')
const router = express.Router();
const {getAllTasks,createTask,getTask,deleteTask,updateTask} = require('../controllers/tasks')
const {getAllCourses,createCourse, deleteCourse, updateCourse} = require('../controllers/courses')
const {getAllConnections,createConnection,deleteConnection,updateConnection} = require('../controllers/connections')


router.route('/tasks').get(getAllTasks).post(createTask)
router.route('/tasks/:id').get(getTask).patch(updateTask).delete(deleteTask)

router.route('/courses').get(getAllCourses).post(createCourse)
router.route('/courses/:id').patch(updateCourse).delete(deleteCourse)

router.route('/connections').get(getAllConnections).post(createConnection)
router.route('/connections/:id').patch(updateConnection).delete(deleteConnection)


module.exports = router
