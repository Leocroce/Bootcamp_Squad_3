const express = require('express')
const router = express.Router()

const TeacherController = require ('../controllers/TeacherController')

router.post('/add',TeacherController.createTeacher)
router.get('/', TeacherController.showTeacher)
router.get('/edit/:id', TeacherController.listUpdateTeacher)
router.post('/edit', TeacherController.sendUpdateTeacher)
router.post('/remove', TeacherController.removeTeacher)

module.exports = router
