import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartThunk, selectCart } from '../features/cartSlice';
import { selectProducts, getProducts } from '../features/productsReducer';
import { selectCurrentUser } from '../features/authSlice';
import { addToCart, removeFromCart } from '../features/cartSlice';

export default function Cart() {

    const currentUser = useSelector(selectCurrentUser)

    let id; 
    if(currentUser) id = currentUser.id;

    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const cards = useSelector(selectProducts);
    const [total, setTotal] = useState(0);
   
    useEffect(() => {
        dispatch(getCartThunk(id)); 
        dispatch(getProducts())
    }, [dispatch]);

    const addToCartHandler =  (e, userId, productId) =>{
        e.preventDefault();
        // setTotal(0);
        dispatch(addToCart({ userId, productId } ) );
    }

    const removeFromCartHandler =  (e, userId, productId) =>{
        e.preventDefault();
        // setTotal(0);
        dispatch(removeFromCart({ userId, productId } ) );
    }

  return (
    <div>Cart
        <h1>Your Shopping Cart</h1>
        <h2>Total Price: {total}</h2>
        <div id='cart-container'>
            {cart.lineItems && cart.lineItems.length? 
                cart.lineItems.map((itm) =>  {
                    const card = cards.find(card => card.id === itm.productId);
                    
                    return (
                        <div className='cart-Product' key={itm.id}>
                            <h1>{card.name}</h1>
                            <h2>Quantity: {itm.quantity}</h2>
                            <img src={card.img}/>
                            <p>{card.descr}</p>
                            <h3>Price: {Number(card.price) * itm.quantity}</h3>

                            <button onClick={(e) => addToCartHandler(e, currentUser.id, card.id)}>Add Another to Cart</button>
                            <button onClick={(e) => removeFromCartHandler(e, currentUser.id, card.id)}>Remove from Cart</button>
                        </div>
                        
                    )
                })
                 :null
            }
            
        </div>
    </div>
  )
}

