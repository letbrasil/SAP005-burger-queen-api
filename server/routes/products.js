const { Router } = require('express')
const ProductsController = require('../controller/productsController')

const router = Router()

// aqui vai as requisições
router.get('/', ProductsController.getAllProducts)

//  *** CRIAR FUNÇÕES DE CADA ENDPOINT NO CONTROLLER ***
// router.get('/:productid', productsController.funcao)
// router.post('/', productsController.funcao)
// router.put('/:productid', productsController.funcao)
// router.delete('/:productid', productsController.funcao)

module.exports = router