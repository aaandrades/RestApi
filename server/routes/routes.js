const { Router } = require('express');
const router = Router();

const {
    createProduct,
    obtainProduct,
    updateProduct,
    searchProduct,
    deleteProduct
} = require('../controller/controller');


// Route Default or Main
router.get('/', (req, res) => {
    res.send('Api Rest Working');

})

// Route Get all Products
router.get('/obtainProduct', obtainProduct);

// Route Create Product
router.post('/createProduct', createProduct);

// Route Search product by ID
router.get('/searchProduct/:id', searchProduct);

// Route Delete product by ID
router.delete('/deleteProduct/:id', deleteProduct);

// Route Update product by ID
router.put('/updateProduct/:id', updateProduct);


module.exports = router;