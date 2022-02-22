const express = require('express')
const router = express.Router()

const TeacherController = require ('../controllers/TeacherController')

router.post('/add',TeacherController.createTeacher)
router.get('/', TeacherController.showTeacher)
router.get('/edit/:id', TeacherController.listUpdateTeacher)
router.patch('/edit', TeacherController.sendUpdateTeacher)
router.delete('/remove', TeacherController.removeTeacher)

module.exports = router

