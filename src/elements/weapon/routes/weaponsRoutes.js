const express = require('express');
const router = express.Router();
const weaponController = require('../controllers/weaponsController');

router.get('/', weaponController.getWeapons);
router.get('/:id', weaponController.getWeapon);
router.post('/',weaponController.createWeapon);
router.delete('/:id',weaponController.deleteWeapon);

module.exports = router;
