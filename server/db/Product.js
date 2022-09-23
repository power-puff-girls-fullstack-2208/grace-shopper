const conn = require('./conn');
const { Sequelize } = conn;

const Product = conn.define('product', {
    cardId:{
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
    hp:{
        type: Sequelize.INTEGER
    },
    evolvesFrom: {
        type: Sequelize.STRING
    },
    abilities: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
    },
    attacks: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
    },
    weaknesses: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    retreatCost: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    img:{
        type: Sequelize.STRING,
    },
    descr:{
        type: Sequelize.TEXT,
    },
    name:{
        type: Sequelize.TEXT,
    },
    rarity: {
        type: Sequelize.STRING,
    },
    series: {
        type: Sequelize.STRING,
    },
    releasedOn: {
        type: Sequelize.STRING,
    }
})

module.exports = Product;