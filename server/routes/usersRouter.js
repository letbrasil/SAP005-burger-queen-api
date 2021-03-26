const { Router } = require('express');
const UsersController = require('../controller/UsersController');

const router = Router();

// aqui vai as requisições
router.get('/', UsersController.getAllUsers);

//  *** CRIAR FUNÇÕES DE CADA ENDPOINT NO CONTROLLER ***
// router.get('/:uid', UsersController.funcao)
// router.post('/', UsersController.funcao)
// router.put('/:uid', UsersController.funcao)
// router.delete('/:uid', UsersController.funcao)

module.exports = router;
