const express = require('express');
const router = express.Router();
const specialAmmoController = require('../controller/specialAmmoController');

router.get('/',specialAmmoController.getSpecialAmmos);
router.get('/:id',specialAmmoController.getSpecialAmmo);
router.post('/',specialAmmoController.createSpecialAmmo);
router.delete('/:id',specialAmmoController.deleteSpecialAmmo);
router.put('/:id',specialAmmoController.updateSpecialAmmo);

module.exports = router;