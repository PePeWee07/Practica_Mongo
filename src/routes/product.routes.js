const { Router } = require('express');

const { getProducts, createProducts, updateProducts, deleteProducts } = require('../controllers/product.controller')

const router = Router()

router.get('/get-products', getProducts);

router.post('/create-products', createProducts);

router.put('/update-products', updateProducts);

router.delete('/delete-products', deleteProducts);

module.exports = router;