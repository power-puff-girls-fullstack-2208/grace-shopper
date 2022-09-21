const conn = require('./conn');
const { Sequelize } = conn;
const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const Tag = require('./Tag');
const LineItem = require('./LineItem');
//what are the models for an ecommerce website?
//users products orders tag

//line item is the product and the amount of sidproduct

User.hasMany(Order);
Tag.hasMany(Product);
LineItem.belongsTo(Product)
Order.belongsTo(User);
Order.hasMany(LineItem)

const syncAndSeed = async () => {
    await conn.sync({ force: true });

    const tagsExample = await Tag.create({subtype:['pokemon'], types:['normal'], rarity: 'common'});

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

    const productsExample = await Product.bulkCreate([{cardId:"QWn-15",price:7.25,qty:"59",img:"https://robohash.org/etquiset.png?size=50x50&set=set1",
    descr:"Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.", 
        name:"Springbuck", tagId: tagsExample.id},
      {cardId:"IcH-44",price:8.62,qty:"4705",img:"https://robohash.org/errornesciuntrepudiandae.png?size=50x50&set=set1",descr:"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      name:"Currasow (unidentified)", tagId: tagsExample.id},
      {cardId:"EYg-65",price:1.28,qty:"2",img:"https://robohash.org/delenitiipsamvel.png?size=50x50&set=set1",
      descr:"Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
      name:"Genet, small-spotted", tagId: tagsExample.id},
      {cardId:"dTD-02",price:1.15,qty:"84",img:"https://robohash.org/itaqueanimiveniam.png?size=50x50&set=set1",
      descr:"Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
      name:"White-mantled colobus",tagId: tagsExample.id},
      {cardId:"vxL-70",price:5.72,qty:"672",img:"https://robohash.org/errornihilenim.png?size=50x50&set=set1",
      descr:"Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      name:"Anteater, australian spiny", tagId: tagsExample.id},
      {cardId:"9gF-39",price:4.00,qty:"6",img:"https://robohash.org/inventoremaiorestotam.png?size=50x50&set=set1",
      descr:"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      name:"Swan, trumpeter", tagId: tagsExample.id},
      {cardId:"VzS-63",price:7.74,qty:"7", img:"https://robohash.org/remvitaeiusto.png?size=50x50&set=set1",
      descr:"In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
      name:"Potoroo", tagId: tagsExample.id},
      {cardId:"bKv-09",price:6.22,qty:"00507",img:"https://robohash.org/sedquiest.png?size=50x50&set=set1",
      descr:"Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
      name:"Cormorant, little", tagId: tagsExample.id},
      {cardId:"4tF-74",price:9.37,qty:"2",img:"https://robohash.org/hicasperioresvoluptatem.png?size=50x50&set=set1",
      descr:"Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      name:"Gull, lava", tagId: tagsExample.id},
      {cardId:"MEA-75",price:0.78,qty:"1668",img:"https://robohash.org/aperiamquamin.png?size=50x50&set=set1",
      descr:"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      name:"Yellow baboon", tagId: tagsExample.id}]);
    
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

    

    const lineItemExample = await LineItem.bulkCreate([{quantity: 0, productId: productsExample[0].id, orderId: ordersExample[9].id },{quantity: 0, productId: productsExample[1].id, orderId: ordersExample[9].id},
      {quantity: 0, productId: productsExample[2].id, orderId: ordersExample[9].id},{quantity: 0, productId: productsExample[3].id, orderId: ordersExample[9].id},{quantity: 0, productId: productsExample[4].id, orderId: ordersExample[9].id},
      {quantity: 0, productId: productsExample[5].id, orderId: ordersExample[9].id },{quantity: 0, productId: productsExample[6].id,orderId: ordersExample[9].id}, {quantity: 0, productId: productsExample[7].id, orderId: ordersExample[9].id},
      {quantity: 0, productId: productsExample[8].id, orderId: ordersExample[9].id},{quantity: 0, productId: productsExample[9].id, orderId: ordersExample[9].id}]);

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