const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/',userController.getUsers);
router.get('/:id',userController.getUser);
router.post('/',userController.createUser);

module.exports = router;