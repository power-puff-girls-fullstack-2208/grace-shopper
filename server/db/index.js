const conn = require('./conn');
const { Sequelize } = conn;
const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const Tag = require('./Tag');
const LineItem = require('./LineItem');
const { response } = require('express');
const pokemon = require('pokemontcgsdk');
pokemon.configure({apiKey: '123abc'})
//what are the models for an ecommerce website?
//users products orders tag

//line item is the product and the amount of sidproduct

User.hasMany(Order);
Product.belongsToMany(Tag, {through: 'Product_Tags'});
Tag.belongsToMany(Product, {through: 'Product_Tags'});
// Tag.hasMany(Product);
LineItem.belongsTo(Product)
Order.belongsTo(User);
Order.hasMany(LineItem)

const syncAndSeed = async () => {
    await conn.sync({ force: true });

    const types = await pokemon.type.all();
    const allPokemon = (await pokemon.card.where({q: 'supertype:Pokémon', pageSize: 50, page: 1})).data;
    
    const usersExample = await User.bulkCreate([{id:1,username:"cplace0",password:"WvUcrbJTJg5Z",email:"cplace0@house.gov",fName:"Connie",lName:"Place", isAdmin: true},
      {id:2,username:"breeveley1",password:"JqCwce1EzJJ",email:"breeveley1@privacy.gov.au",fName:"Benedick",lName:"Reeveley"},
      {id:3,username:"nschiesterl2",password:"tL8fuz",email:"nschiesterl2@independent.co.uk",fName:"Nevile",lName:"Schiesterl"},
      {id:4,username:"zlabbati3",password:"wmB5G9MbJ",email:"zlabbati3@fc2.com",fName:"Zolly",lName:"Labbati"},
      {id:5,username:"hverrier4",password:"NxEyqRqLJ7",email:"hverrier4@kickstarter.com",fName:"Hercules",lName:"Verrier"},
      {id:6,username:"sstolz5",password:"OchCwv99GRD",email:"sstolz5@yelp.com",fName:"Sigismundo",lName:"Stolz"},
      {id:7,username:"rcogin6",password:"mVu07Mzr",email:"rcogin6@addthis.com",fName:"Rudy",lName:"Cogin"},
      {id:8,username:"pwolfindale7",password:"fjgg1rPuZIV",email:"pwolfindale7@jalbum.net",fName:"Peirce",lName:"Wolfindale"},
      {id:9,username:"jsmitheram8",password:"07uA2NTPH1",email:"jsmitheram8@ihg.com",fName:"Jason",lName:"Smitheram"},
      {id:10,username:"ptremblay9",password:"5Hn0ai1Ozc",email:"ptremblay9@etsy.com",fName:"Pedro",lName:"Tremblay"}])

      const tags = await Tag.bulkCreate(types.map(type => {return {type: type}}));
      const all = allPokemon.map(async pokemon => {

        const price = !pokemon.cardmarket ? 0 : pokemon.cardmarket.prices ? pokemon.cardmarket.prices.trendPrice : 0;
        const newPokemon =  await Product.create({
          cardId: pokemon.id,
          price: price,
          qty: pokemon.set.printedTotal,
          img: pokemon.images.large,
          descr: pokemon.flavorText,
          name: pokemon.name,
          rarity: pokemon.rarity
        }).catch(err => console.error(err));
        const pokemonTags = 0;
        pokemon.types.forEach(async type => {
          type ? await newPokemon.addTag((await Tag.findOne({where: {type: type}})).id) : null;
        });
        return newPokemon
      })

    const ordersExample = await Order.bulkCreate([{isCart:false,address:"044 Holy Cross Trail", userId: usersExample[0].id},
      {isCart:false,address:"1311 Utah Lane", userId: usersExample[0].id},
      {isCart:false,address:"05990 Northfield Trail", userId: usersExample[0].id},
      {isCart:false,address:"64 Sachs Trail", userId: usersExample[0].id},
      {isCart:false,address:"326 Armistice Crossing", userId: usersExample[0].id},
      {isCart:false,address:"13723 Hagan Hill", userId: usersExample[0].id},
      {isCart:false,address:"77 Nova Road", userId: usersExample[0].id},
      {isCart:false,address:"3 Messerschmidt Center", userId: usersExample[0].id},
      {isCart:false,address:"4 Dapin Street", userId: usersExample[0].id},
      {isCart:true,address:"123 Esch Lane", userId: usersExample[0].id}]);
      
    const lineItemExample = await LineItem.bulkCreate([{quantity: 0, productId: all[0].id, orderId: ordersExample[9].id },{quantity: 0, productId: all[1].id, orderId: ordersExample[9].id},
      {quantity: 0, productId: all[2].id, orderId: ordersExample[9].id},{quantity: 0, productId: all[3].id, orderId: ordersExample[9].id},{quantity: 0, productId: all[4].id, orderId: ordersExample[9].id},
      {quantity: 0, productId: all[5].id, orderId: ordersExample[9].id },{quantity: 0, productId: all[6].id,orderId: ordersExample[9].id}, {quantity: 0, productId: all[7].id, orderId: ordersExample[9].id},
      {quantity: 0, productId: all[8].id, orderId: ordersExample[9].id},{quantity: 0, productId: all[9].id, orderId: ordersExample[9].id}]);

    console.log(`
    Seeding successful!
  `);
}

//test with seeding
//see what the database looks like and refactor isntance methods on User if necessary

module.exports = {
    conn,
    syncAndSeed,
    User,
    Product,
    Order,
    Tag,
    LineItem,
};