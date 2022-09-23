const router = require('express').Router();
const Product = require('../db/Product');
const Tag = require('../db/Tag');

//get /api/products
router.get('/', async (req, res, next) => {
    try {
        res.send(await Product.findAll({
            include: {
                model: Tag
            }
        }));
    } catch (error) {
        next(error);
    }
});

//get single card
router.get('/:productId', async (req, res, next) => {
    try {
        res.send(await Product.findByPk(req.params.productId, {
            include: {
                model: Tag
            }
        }));
    } catch(error) {
        next(error);
    }
});

module.exports = router;