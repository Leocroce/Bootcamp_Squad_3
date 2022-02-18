const express = require('express')
const router = express.Router()

const TeacherController = require ('../controllers/TeacherController')

router.post('/add',TeacherController.createTeacher)

module.exports = router