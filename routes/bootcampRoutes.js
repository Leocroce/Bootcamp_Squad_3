const express = require('express');
const router = express.Router();

const BootcampController = require('../controllers/BootcampController');

router.post('/add', BootcampController.createBootcamp)
router.get('/', BootcampController.showBootcamp)
router.post('/edit', BootcampController.updateBootcamp)
router.post('/remove', BootcampController.removeBootcamp)

module.exports = router;
