const productCon = require('../controller/productController');
const  router = require('express').Router();


router.post('/add-product' , productCon.addProduct);
router.get('/all-product' , productCon.getAllProduct);
router.get('/published-product' , productCon.getPublishedProduct);

router.get('/single-product/:id' , productCon.getSingeProduct);
router.put('/update-product/:id' , productCon.updateProduct);
router.delete('/delete-product/:id' , productCon.deleteProduct);







module.exports = router;