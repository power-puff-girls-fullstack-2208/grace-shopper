const router = require('express').Router();
const User = require('../db/User');
const Order = require('../db/Order');
const LineItem = require('../db/LineItem');
const {Op} = require('sequelize');
const { Product } = require('../db');


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
        include: [
          {
            model: LineItem,
            where: {
                quantity: {
                    [Op.gt] : 0
                }
            },
            include: {
              model: Product,
            },
        }
      ]
       })
       res.send(cart2);
    } catch (error) {
      next(error);
    }
});




router.put('/:userId/cart/:productId/decrement', async (req, res, next) =>{
  try{
    const user = await User.findByPk(req.params.userId,{
      attributes: {
        exclude: ['password']
     }
    });
    
    const cart = await user.getCart();  
       const cartId = cart[0].dataValues.id;
       const cart2 = await Order.findByPk(cartId,{
        include: {
            model: LineItem,
        }
       })
       const paramsProductId = Number(req.params.productId)

       let cartLineItem = cart2.lineItems.filter(item => item.dataValues.productId === paramsProductId)

       if(cartLineItem.length){
        const lineItemToUpdate = await LineItem.findByPk(cartLineItem[0].dataValues.id)
        await lineItemToUpdate.update({quantity: cartLineItem[0].dataValues.quantity - 1})
      } 
      res.send(cart2)
  } catch(error){
    next(error)
  }
})


//route to handle adding to cart from button clicker
router.put('/:userId/cart/:productId', async (req, res, next) =>{
  //takes userId and then returns the user's cart
  
  try{
    //clean this up later with helper function
    const user = await User.findByPk(req.params.userId,{
      attributes: {
        exclude: ['password']
     }
    });
    
    const cart = await user.getCart();  
       const cartId = cart[0].dataValues.id;
       const cart2 = await Order.findByPk(cartId,{
        include: {
            model: LineItem,
        }
       })
    //update or create LineItem based on the input from req.body
    console.log('this is cart2:');
    console.dir(cart2.lineItems[0])
    console.log('this is req.params.productId')
    console.dir(req.params.productId)
    
    const paramsProductId = Number(req.params.productId)

    let cartLineItem = cart2.lineItems.filter(item => item.dataValues.productId === paramsProductId)

    console.log('this is cartLineItem')
    console.log(cartLineItem)

    if(cartLineItem.length){
        const lineItemToUpdate = await LineItem.findByPk(cartLineItem[0].dataValues.id)
        await lineItemToUpdate.update({quantity: cartLineItem[0].dataValues.quantity + 1})
    }
    else{
      await LineItem.create({quantity: 1, orderId: cartId, productId: req.params.productId})
    }
    //what to send? 
    res.send(cart2)
  }
  catch(error){
    console.log(error)
    next(error);
  }
})



module.exports = router;