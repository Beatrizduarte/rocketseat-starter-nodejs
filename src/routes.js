const express = require('express')

const routes = express.Router()

const ProductsControllers = require('./controllers/ProductController')

routes.get('/products', ProductsControllers.index);
routes.post('/products', ProductsControllers.store);

module.exports = routes; 