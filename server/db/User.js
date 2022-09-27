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

//create authentication
User.prototype.generateToken = function() {
    return jwt.sign({ id: this.id }, process.env.JWT);

}

User.findByToken = async function(token) {
    const user = await User.findByPk(token)
    if(!user) {
        const error = Error('bad credentials')
        error.status = 401
        throw error
    }
    return user
}


User.authenticate = async function ({ username, password }) {
    const user = await this.findOne(
        {
            where: {
                username,
                password
            }
        }
    )
    if(!user) {
        const error = Error('bad credentials')
        error.status = 401
        throw error
    }
    return user.generateToken()
}

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

module.exports = User;