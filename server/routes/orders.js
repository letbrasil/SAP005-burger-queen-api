const { Router } = require('express')
const OrdersController = require('../controller/ordersController')

const router = Router()

// aqui vai as requisições
router.get('/', OrdersController.getAllOrders)

//  *** CRIAR FUNÇÕES DE CADA ENDPOINT NO CONTROLLER ***
// router.get('/:orderid', ordersController.funcao)
// router.post('/', ordersController.funcao)
// router.put('/:orderid', ordersController.funcao)
// router.delete('/:orderid', ordersController.funcao)

module.exports = router