const { Router } = require('express');
const { getCustomer, createCustomer, updateCustomer, deleteCustomer } = require('../controllers/customer.controller');
// import router from "./product.routes";

const router =  Router()

router.get('/get-customer', getCustomer);

router.post('/create-customer', createCustomer);

router.put('/update-customer', updateCustomer);

router.delete('/delete-customer', deleteCustomer);

module.exports = router