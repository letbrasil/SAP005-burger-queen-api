const { Router } = require('express');
const UsersController = require('../controller/UsersController');

const router = Router();

// aqui vai as requisições
router.get('/', UsersController.getAllUsers);
router.get('/:uid', UsersController.getUserById);
router.post('/', UsersController.createUser);
// router.put('/:uid', UsersController.updateUser);
router.delete('/:uid', UsersController.deleteUser);

module.exports = router;
