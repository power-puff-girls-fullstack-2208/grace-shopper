const router = require('express').Router();
const User = require('../db/User');
const Order = require('../db/Order');
const LineItem = require('../db/LineItem');
const {Op} = require('sequelize');

router.get('/:id', async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id,{
        attributes: {
          exclude: ['password']
       }
    });
       const cart = await user.getCart();
       
       const cartId = cart[0].dataValues.id;
       
       const cart2 = await Order.findByPk(cartId,{
        include: 
            LineItem,
            // where: {
            //     quantity: {
            //         [Op.gt] : 0
            //     }
            // }
        
       })
       console.log("lineItem[0]")
       console.log(cart2.lineItems[0].dataValues)
       
       console.log(cart2);
       res.send(cart2)
    
    } catch (error) {
      next(error);
    }
});

module.exports = router;