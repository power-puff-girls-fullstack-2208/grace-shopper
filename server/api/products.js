const router = require('express').Router();
const {Product} = require('../db');

//get /api/cards
router.get('/', async (req, res, next) => {
    try {
        res.send(await Product.findAll());
    } catch (error) {
        next(error);
    }
});

//get single card
router.get('/:cardId', async (req, res, next) => {
    try {
        res.send(await Product.findByPK(req.params.cardId));
    } catch(error) {
        next(error);
    }
});

module.exports = router;