var product_controller=require('/home/anuradha/ProductsApp/controllers/product.controller.js');
const express = require('express');
const router = express.Router();
var cors = require('cors')

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

router.get('/test', allowCrossDomain,product_controller.test);
module.exports = router;
router.post('/create', product_controller.votername);

router.get('/read', product_controller.voterdetails);

router.patch('/update/:id', product_controller.voterupdate);
router.delete('/delete/:id', product_controller.voterdelete);
router.post('/addcan',product_controller.canditatename);
router.get('/getcan',product_controller.canditatedetails);

router.post('/add',product_controller.can_id);
router.get('/votes',product_controller.votescount);