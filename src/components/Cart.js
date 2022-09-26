import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartThunk, selectCart } from '../features/cartSlice';
import { selectProducts, getProducts } from '../features/productsReducer';
import Nav from './Nav';

export default function Cart() {

     //check if User is logged in 
        //hard coded example auth
        //const token = User.authenticate("cplace0", "WvUcrbJTJg5Z")
    //fetch the User
        //user = User.findByToken(token)
        //iffy about this-> const user = useSelector( state => state.getUser(user.id));

    const dispatch = useDispatch();
    //const currentUser = useSelector(state => state.user)//subscribe to the single user state from the store
    const cart = useSelector(selectCart);
    const cards = useSelector(selectProducts);
    
    console.log('cart contents: ')
    console.log(cart)

    console.log('cards contents: ')
    console.log(cards);

    useEffect(() => {
        dispatch(getCartThunk(1)); //hard coded right now for the userId from the seed
        dispatch(getProducts())
    }, [dispatch]);

    

  return (
    <div>Cart
        <Nav/>
        <h1>Your Shopping Cart</h1>
        <div id='card-container'>
            {cart.lineItems.map((itm) =>  {
                const card = cards.filter(card => card.id === itm.productId)
                console.log(card);
                return (
                    <div className='singleProduct'>
                        <h1>{card.name}</h1>
                        <img src={card.img}/>
                        <p>{card.descr}</p>
                        <h3>Price: {card.price}</h3>
                        <button>Remove from Cart</button>
                    </div>
                )

            })
            }
        {/* 
        //map over cart and render everything in it
            //lineItems.map((itm)=>{
            //  const product = getProduct(itm.productId)
            //  *Product image here*
                *Name*
                *Price*
            //})
        */}
        </div>
    </div>
  )
}

