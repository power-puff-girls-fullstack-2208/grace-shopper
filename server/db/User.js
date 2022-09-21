const conn = require('./conn');
const { Sequelize } = conn;
//jwt auth imported here

const User = conn.define('user', {
    username:{
        type: Sequelize.STRING,
        validate:{
            allowNull: false,
            notEmpty: true,
            unique: true,
        }
    },
    password:{
        type: Sequelize.STRING,
        validate:{
            allowNull: false,
            notEmpty: true,
        }

    },
    email:{
        type: Sequelize.STRING,
        validate:{
            isEmail: true,
            allowNull: false,
            notEmpty: true,
            unique: true,
        }
    },
    fName:{
        type: Sequelize.STRING,
        validate:{
            allowNull: false,
            notEmpty: true,
        }
    },
    lName:{
        type: Sequelize.STRING,
        validate:{
            allowNull: false,
            notEmpty: true,
        }
    },
    // cart:{
    //     //pokemon cards unique ID from the api is a string
    //     type: Sequelize.ARRAY(Sequelize.STRING),
        
    // }
})

//create authentication



User.prototype.getCart = async function(){
    const cart = await this.getOrders().filter(order => order.isCart);
    return cart;
}

User.prototype.addToCart = async function(productId){
//    grab the order associated with the user
//    orders are your cart
    const cart = await this.getCart();
    //find this cart's line item where productId = product.Id
    const lineItem = await cart.getLineItems().filter(item => item.productId === productId);
    //increment line item quantity field
    lineItem.quantity++;

    //maybe product should be appended to lineItem and then lineItem appended to Cart?
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

module.exports = User;