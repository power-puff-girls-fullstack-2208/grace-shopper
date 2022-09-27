const router = require('express').Router();
const User = require('../db/User');
const Order = require('../db/Order');
const LineItem = require('../db/LineItem');
const {Op} = require('sequelize');

router.get('/:id/cart', async (req, res, next) => {
    //takes a userId and then returns the user's associated cart
    try {
      const user = await User.findByPk(req.params.id,{
        attributes: {
          exclude: ['password']
       }
    });
       const cart = await user.getCart();  
       const cartId = cart[0].dataValues.id;
       const cart2 = await Order.findByPk(cartId,{
        include: {
            model: LineItem,
            where: {
                quantity: {
                    [Op.gt] : 0
                }
            }
        }
       })
       res.send(cart2);
    } catch (error) {
      next(error);
    }
});

//route to handle adding to cart from button clicker
router.put(':id/cart', async (req, res, next) =>{
  //takes userId and then returns the user's cart
  try{
    //clean this up later with helper function
    const user = await User.findByPk(req.params.id,{
      attributes: {
        exclude: ['password']
     }
    });
    const cart = await user.getCart();  
       const cartId = cart[0].dataValues.id;
       const cart2 = await Order.findByPk(cartId,{
        include: {
            model: LineItem,
            where: {
                quantity: {
                    [Op.gt] : 0
                }
            }
        }
       })
    //what do I want to do here?
    //update or create LineItem based on the input from req.body
    //

    
  }
  catch(error){
    next(error);
  }
})

module.exports = router;