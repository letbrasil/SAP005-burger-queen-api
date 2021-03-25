const { Router } = require('express')
const UsersController = require('../controller/usersController')

const router = Router()

// aqui vai as requisições
router.get('/', UsersController.getAllUsers)

//  *** CRIAR FUNÇÕES DE CADA ENDPOINT NO CONTROLLER ***
// router.get('/:uid', usersController.funcao)
// router.post('/', usersController.funcao)
// router.put('/:uid', usersController.funcao)
// router.delete('/:uid', usersController.funcao)

module.exports = router