const conn = require('./conn');
const { Sequelize } = conn;

const Product = conn.define('product', {
    Id:{
        //GET from API call 
        type: Sequelize.STRING,
    },
    price:{
        type: Sequelize.DOUBLE,
    },
    qty:{
        type: Sequelize.INTEGER,
        validate:{
            min: 0,
        },
        defaultValue: 10,
    },
    img:{
        type: Sequelize.STRING,
    },
    descr:{
        type: Sequelize.TEXT,
    },
    name:{
        type: Sequelize.TEXT,
    }
})

module.exports = Product;