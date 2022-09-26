const router = require('express').Router();
const User = require('../db/User');

router.get("/", (req, res) => {
    console.log(req.body)

    res.send("hello world")
})


module.exports = router;