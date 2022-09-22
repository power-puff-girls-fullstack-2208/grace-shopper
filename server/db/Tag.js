const conn = require('./conn');
const { Sequelize } = conn;

const Tag = conn.define('tag', {
    type:{
        type: (Sequelize.STRING),
    }
})

module.exports=Tag