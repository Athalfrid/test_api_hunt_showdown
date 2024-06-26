const express = require('express');
const router = express.Router();
const hunterController = require('../controllers/hunterControllers');

router.get('/',hunterController.getHunters);
router.get('/:id',hunterController.getHunter);
router.post('/',hunterController.createHunter);
router.delete('/:id',hunterController.deleteHunter);

module.exports = router;