const { Router } = require('express')
const productoController = require('../controllers/productoController')
const route = Router()

route.get('/productos', productoController.allProductos)

route.get('/productos/:id', productoController.getProducto)

route.delete('/productos/:id', productoController.deleteProducto)

module.exports = route
