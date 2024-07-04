const express = require('express');
const router = express.Router();
const lootController = require('../controllers/lootController');
const auth = require('../../../middleware/auth');

//TODO: add auth on each routers

router.get('/', lootController.getLoots);
router.get('/:id', lootController.getLoot);
router.post('/', lootController.createLoot);
router.delete('/:id', lootController.deleteLoot);
router.put('/:id', lootController.updateLoot);

module.exports = router;