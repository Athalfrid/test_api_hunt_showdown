const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.post('/login',userController.loginUser);


router.get('/',userController.getUsers);
router.get('/:id',userController.getUser);
router.post('/',userController.createUser);
router.delete('/:id',userController.deleteUser);


module.exports = router;