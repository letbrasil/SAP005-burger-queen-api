const { Router } = require('express');
const OrdersController = require('../controller/OrdersController');

const router = Router();

// aqui vai as requisições
router.get('/', OrdersController.getAllOrders);

//  *** CRIAR FUNÇÕES DE CADA ENDPOINT NO CONTROLLER ***
// router.get('/:orderId', OrdersController.funcao);
// router.post('/', OrdersController.funcao);
// router.put('/:orderId', OrdersController.funcao);
// router.delete('/:orderId', OrdersController.funcao);

module.exports = router;
