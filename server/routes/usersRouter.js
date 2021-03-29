const { Router } = require('express');
const UsersController = require('../controller/UsersController');

const router = Router();

// aqui vai as requisições
router.get('/', UsersController.getAllUsers);
router.get('/:uid', UsersController.getUserById);
// router.post('/', UsersController.postUser);
// router.put('/:uid', UsersController.funcao);
// router.delete('/:uid', UsersController.funcao);

module.exports = router;
