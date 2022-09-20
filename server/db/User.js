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

User.prototype.addToCart = async function(){
//    grab the order associated with the user
//    orders are your cart
    const cart = this.getCart();

}

User.prototype.removeFromCart = async function(){

}

//coverting order model from cart to actual placed order
User.prototype.createOrder = async function(){

}

module.exports = User;