const express = require('express');
const router = express.Router();

const BootcampController = require('../controllers/BootcampController');

router.get('/', BootcampController.listBootcamp)
router.post('/add', BootcampController.createBootcamp)
router.get('/teacher/:id', BootcampController.showBootcamp)
router.get('/edit/:id', BootcampController.listUpdateBootcamp)
router.patch('/edit', BootcampController.updateBootcamp)
router.delete('/remove', BootcampController.removeBootcamp)

module.exports = router;

