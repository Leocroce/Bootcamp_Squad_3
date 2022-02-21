const express = require('express');
const router = express.Router();

const BootcampController = require('../controllers/BootcampController');

router.post('/add', BootcampController.createBootcamp)
router.get('/teacher/:id', BootcampController.showBootcamp)
router.get('/edit/:id', BootcampController.listUpdateBootcamp)
router.get('/', BootcampController.listBootcamp)
router.post('/edit', BootcampController.updateBootcamp)
router.post('/remove', BootcampController.removeBootcamp)

module.exports = router;
