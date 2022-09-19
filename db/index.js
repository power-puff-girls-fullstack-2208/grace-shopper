const conn = require('./conn');
const { Sequelize } = conn;
const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const Tag = require('./Tag');
const LineItem = require('./LineItem');
//what are the models for an ecommerce website?
//users products orders tag

//line item is the product and the amount of said product

User.hasMany(Order);
Tag.hasMany(Product);
LineItem.belongsTo(Product)
Order.belongsTo(User);
Order.hasMany(LineItem)




module.exports = {
    conn,
};