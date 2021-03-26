const { Router } = require('express');
const ProductsController = require('../controller/ProductsController');

const router = Router();

// aqui vai as requisições
router.get('/', ProductsController.getAllProducts);

//  *** CRIAR FUNÇÕES DE CADA ENDPOINT NO CONTROLLER ***
// router.get('/:productid', ProductsController.funcao)
// router.post('/', ProductsController.funcao)
// router.put('/:productid', ProductsController.funcao)
// router.delete('/:productid', ProductsController.funcao)

module.exports = router;
