const Order = require('./Order');
const conn = require('./conn');
const { Sequelize } = conn;
//jwt auth imported here
const jwt = require('jsonwebtoken');



const User = conn.define('user', {
    username:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{
            notEmpty: true,
        }
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }

    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true,
            notEmpty: true,
        }
    },
    fName:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    lName:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    isAdmin:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
    // cart:{
    //     //pokemon cards unique ID from the api is a string
    //     type: Sequelize.ARRAY(Sequelize.STRING),
        
    // }
})


//cart prototypes
User.prototype.getCart = async function(){
    const orders = await this.getOrders();
    const cart = await orders.filter(order => order.dataValues.isCart === true);
    return cart;
}

User.prototype.addToCart = async function(productId){

    const cart = await this.getCart();
    //find this cart's line item where productId = product.Id
    const lineItem = await cart.getLineItems().filter(item => item.productId === productId);
    //increment line item quantity field
    lineItem.quantity++;


}

User.prototype.removeFromCart = async function(){
    const cart = await this.getCart();
    const lineItem = await cart.getLineItems().filter(item => item.productId === productId);
    lineItem.quantity--;
}

//coverting order model from cart to actual placed order
User.prototype.createOrder = async function(){
    const cart = await this.getCart();
    cart.isCart === false;
}

User.afterCreate(async (user, options) => {
    try {
        const cart = await Order.create({isCart: true, address: null, userId: user.id})
        console.log(cart)
    } catch (ex) {
        console.log(ex)
    }
    
})

module.exports = User;