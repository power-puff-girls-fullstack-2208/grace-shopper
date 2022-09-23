const router = require('express').Router();
const User = require('../db/User');

router.post('/api/auth', async(req, res, next) => {
    try{
      res.send(await User.authenticate(req.body))
    }
    catch (ex) {
      next(ex)
    }
  })
  
  router.get('api/auth', async(req,res,next) => {
    try{
      res.send(await User.findByToken(req.headers.authorization))
    }
    catch (ex) {
      next(ex)
    }
  })
  
  router.delete('/api/auth', async(req, res, next)=> {
    try {
       res.send();
    }
    catch(ex) {
       next(ex);
    }
  })

  module.exports = router;