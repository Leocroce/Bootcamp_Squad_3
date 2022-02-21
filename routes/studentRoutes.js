const express = require('express')
const router = express.Router()

const StudentController = require('../controllers/StudentController')

router.post('/create', StudentController.createStudent)
router.get('/', StudentController.showAllStudents)
router.get('/bootcamp/:id', StudentController.showStudents)
router.get('/approved/bootcamp/:id', StudentController.showGoodStudents)
router.get('/failed/bootcamp/:id', StudentController.showBadStudents)
router.get('/update/:id', StudentController.showUpdateStudent)
router.patch('/update', StudentController.updateStudent)
router.delete('/delete', StudentController.deleteStudent)

module.exports = router
