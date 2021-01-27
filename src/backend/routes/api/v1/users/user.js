var express = require('express');
var router = express.Router();
const productCtrl = require('../../../../controllers/productCtrl')


router.get('/show_single_product/:id', productCtrl.singleProduct);
router.post('/edited_product', productCtrl.editedProductDetails);
router.post('/delete_product', productCtrl.deleteProduct);

router.post('/login', productCtrl.userlogin);
router.post('/register', productCtrl.signup);



module.exports = router;