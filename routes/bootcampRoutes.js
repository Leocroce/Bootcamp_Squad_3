const express = require('express');
const router = express.Router();

const BootcampController = require('../controllers/BootcampController');

router.post('/add', BootcampController.createBootcamp)
router.get('/teacher/:id', BootcampController.showBootcamp)
router.get('/edit/:id', BootcampController.listUpdateBootcamp)
router.get('/', BootcampController.listBootcamp)
router.patch('/edit', BootcampController.updateBootcamp)
router.delete('/remove', BootcampController.removeBootcamp)

module.exports = router;

