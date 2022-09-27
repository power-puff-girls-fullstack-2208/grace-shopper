const router = require('express').Router();
const User = require('../db/User');

router.post("/", async (req, res) => {
    
    const newUser = new User({ ...req.body })

    res.send("hello world")
})


module.exports = router;