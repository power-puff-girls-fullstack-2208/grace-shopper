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

User.hasMany(Order);
Order.belongsTo(User);
Product.belongsToMany(Order, { through: LineItem });
Order.belongsToMany(Product, { through: LineItem });
Product.belongsToMany(Tag, { through: 'Product_Tags'});
Tag.belongsToMany(Product, { through: 'Product_Tags'});
  

const syncAndStart = async () => {
  await conn.sync({ force: false });
  console.log('Syncing success! Your site is live :)')
}

const syncAndSeed = async () => {
    await conn.sync({ force: true });

    const types = await pokemon.type.all();
    const allPokemon = (await pokemon.card.where({q: 'supertype:Pokémon', pageSize: 100})).data;

    // it feels wrong to put this here but this is the only way it will work
    // adds tags to Product instances after they are created
    // this needs to be in here so the hook can refer to allPokemon which has a card's types
    Product.afterBulkCreate(async (products, options) => {
      products.map(async pokemon => {
        // the card is the card that was created
        const card = await Product.findByPk(pokemon.id);
        // thisTypes are the types of card (not stored in card) found by referencing allPokemon
        const thisTypes = allPokemon.find(aCard => aCard.id === card.cardId).types;
        thisTypes ? thisTypes.forEach(async type => {
          console.log(type);
          await card.addTag((await Tag.findOne({where: {type: type}})).id);
        }) : undefined;
      })
    })

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
      const all = await Product.bulkCreate(allPokemon.map(pokemon => {
        const abilities = pokemon.abilities ? pokemon.abilities.map(ability => `${ability.name}: ${ability.text}`) : null;
        const attacks = pokemon.attacks ? pokemon.attacks.map(attack => `${attack.name} (${attack.damage} damage): ${attack.text}`) : null;
        const weaknesses = pokemon.weaknesses ? pokemon.weaknesses.map(weakness => `${weakness.type}: ${weakness.value}`) : null;
        const price = !pokemon.cardmarket ? 0 : pokemon.cardmarket.prices ? pokemon.cardmarket.prices.trendPrice : 0;
        return {
          cardId: pokemon.id,
          price: price,
          qty: pokemon.set.printedTotal,
          hp: pokemon.hp,
          evolvesFrom: pokemon.evolvesFrom,
          abilities: abilities,
          attacks: attacks,
          weaknesses: weaknesses,
          retreatCost: pokemon.retreatCost,
          img: pokemon.images.large,
          descr: pokemon.flavorText,
          name: pokemon.name,
          rarity: pokemon.rarity,
          series: pokemon.set.series,
          releasedOn: pokemon.set.releaseDate
        }
      }), { individualHooks: true });

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
      
    // const lineItemExample = await LineItem.bulkCreate([{quantity: 0, productId: all[0].id, orderId: ordersExample[9].id },{quantity: 0, productId: all[1].id, orderId: ordersExample[9].id},
    //   {quantity: 0, productId: all[2].id, orderId: ordersExample[9].id},{quantity: 0, productId: all[3].id, orderId: ordersExample[9].id},{quantity: 0, productId: all[4].id, orderId: ordersExample[9].id},
    //   {quantity: 0, productId: all[3].id, orderId: ordersExample[9].id },{quantity: 0, productId: all[1].id,orderId: ordersExample[9].id}, {quantity: 0, productId: all[3].id, orderId: ordersExample[9].id},
    //   {quantity: 0, productId: all[2].id, orderId: ordersExample[9].id},{quantity: 0, productId: all[1].id, orderId: ordersExample[9].id}]);

    console.log(`
    Seeding successful!
  `);
}

module.exports = {
    conn,
    syncAndSeed,
    syncAndStart,
    User,
    Product,
    Order,
    Tag,
    LineItem,
};