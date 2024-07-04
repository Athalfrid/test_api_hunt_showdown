const express = require('express');
const router = express.Router();
const traitController = require('../controllers/traitController');
const auth = require('../../../middleware/auth');

//TODO: add auth on each routes

router.get('/', traitController.getTraits);
router.get('/:id', traitController.getTrait);
router.post('/',traitController.createTrait);
router.delete('/:id', traitController.deleteTrait);
router.put('/:id', traitController.updateTrait);

module.exports = router;