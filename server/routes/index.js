const { Router } = require('express')
const ExampleRouter = require('./ExampleRouter')
const Users = require('./users')
const Products = require('./products')
const Orders = require('./orders')

const router = Router()

// aqui vai todas as rotas
router.use('/example', ExampleRouter);
router.use('/users', Users);
router.use('/products', Products);
router.use('/orders', Orders);

module.exports = router
