const { Router } = require('express');
const OrdersController = require('../controller/OrdersController');

const router = Router();

// aqui vai as requisições
router.get('/', OrdersController.getAllOrders);

//  *** CRIAR FUNÇÕES DE CADA ENDPOINT NO CONTROLLER ***
// router.get('/:orderid', OrdersController.funcao)
// router.post('/', OrdersController.funcao)
// router.put('/:orderid', OrdersController.funcao)
// router.delete('/:orderid', OrdersController.funcao)

module.exports = router;
