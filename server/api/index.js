const router = require('express').Router();

router.use('/products', require('./products')); 

router.use('/users', require('./users')); 

module.exports = router;


// this is just placeholder index.js for now. will be replaced/filled with relevant code