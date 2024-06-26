const express = require('express');
const router = express.Router();
const weaponController = require('../controllers/weaponsController');
const auth = require('../../../middleware/auth');

//TODO: add auth on each routes


router.get('/', weaponController.getWeapons);
router.get('/:id', weaponController.getWeapon);
router.post('/',weaponController.createWeapon);
router.delete('/:id',weaponController.deleteWeapon);
router.put('/:id', weaponController.updateWeapon);

module.exports = router;
