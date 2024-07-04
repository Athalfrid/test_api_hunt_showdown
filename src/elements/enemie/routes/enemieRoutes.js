const express = require('express');
const router = express.Router();
const enemieController = require('../controllers/enemieController');
const auth = require('../../../middleware/auth');

//TODO: add auth on each routes


router.get('/', enemieController.getEnemies);
router.get('/:id', enemieController.getEnemie);
router.post('/',enemieController.createEnemie);
router.delete('/:id',enemieController.deleteEnemie);
router.put('/:id', enemieController.updateEnemie);

module.exports = router;
