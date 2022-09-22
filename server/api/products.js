const router = require('express').Router();
const Product = require('../db/Product');

//get /api/products
router.get('/', async (req, res, next) => {
    try {
        res.send(await Product.findAll());
    } catch (error) {
        next(error);
    }
});

//get single card
router.get('/:productId', async (req, res, next) => {
    try {
        res.send(await Product.findByPK(req.params.productId));
    } catch(error) {
        next(error);
    }
});

module.exports = router;