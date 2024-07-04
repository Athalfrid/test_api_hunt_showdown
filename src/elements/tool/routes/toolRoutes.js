const express = require('express');
const router = express.Router();
const toolController = require('../controllers/toolController');
const auth = require('../../../middleware/auth');

//TODO: add auth on each routes


router.get('/', toolController.getTools);
router.get('/:id', toolController.getTool);
router.post('/',toolController.createTool);
router.delete('/:id',toolController.deleteTool);
router.put('/:id', toolController.updateTool);

module.exports = router;
