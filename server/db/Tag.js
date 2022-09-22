const conn = require('./conn');
const { Sequelize } = conn;

const Tag = conn.define('tag', {
    types:{
        type: Sequelize.STRING,
    }
})
// const Tag = conn.define('tag', {
//     subtype:{
//         type: Sequelize.ARRAY(Sequelize.STRING),
//     },
//     types:{
//         type: Sequelize.ARRAY(Sequelize.STRING),
//     },
//     rarity:{
//         type: Sequelize.STRING
//     }

// })

module.exports=Tag