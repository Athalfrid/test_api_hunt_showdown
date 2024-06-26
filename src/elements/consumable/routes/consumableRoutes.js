const express = require('express');
const router = express.Router();
const consumableController = require('../controllers/consumableController');
const auth = require('../../../middleware/auth');

router.get('/',consumableController.getConsumables);
router.get('/:id',consumableController.getConsumable);
router.post('/',consumableController.createConsumable);
router.put('/:id',consumableController.updateConsumable);
router.delete('/:id',consumableController.deleteConsumable);

module.exports = router;