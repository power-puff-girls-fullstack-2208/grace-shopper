import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartThunk, selectCart } from '../features/cartSlice';
import { selectProducts, getProducts } from '../features/productsReducer';
import { selectCurrentUser } from '../features/authSlice';
import { addToCart, removeFromCart } from '../features/cartSlice';
import { Link } from 'react-router-dom';


export default function Cart() {

    const currentUser = useSelector(selectCurrentUser)

    let id; 
    if(currentUser) id = currentUser.id;

    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const cards = useSelector(selectProducts);

    useEffect(() => {
        dispatch(getCartThunk(id)); 
        dispatch(getProducts())
    }, [dispatch, cart]);

    const [totalPrice, setTotalPrice] = useState(0)
    
    useEffect(() =>{
        cart.lineItems && cart.lineItems.length? 
        setTotalPrice(cart.lineItems.reduce((prevVal, itm) =>{
            if(itm.product){
                return prevVal + (itm.quantity * Number(itm.product.price))
            }
            else{
                return prevVal;
            }
        }, 0)) 
        :null
    }, [cart])

    const addToCartHandler =  (e, userId, productId) =>{
        e.preventDefault();
        dispatch(addToCart({ userId, productId } ) );
    }

    const removeFromCartHandler =  (e, userId, productId) =>{
        e.preventDefault();
        dispatch(removeFromCart({ userId, productId } ) );
    }

  return (
    <div className='content'>
        <h1>Your Shopping Cart</h1>
        <div id='cartWrapper'>
            {/* //onClick={((e) => checkoutHandler(e, cart.id))} */}
            <div id='cart-container'>
                
                {cart.lineItems && cart.lineItems.length? 
                    cart.lineItems.map((itm) =>  {
                        const card = cards.find(card => card.id === itm.productId);
                        
                        return (
                            <div className='cart-Product' key={itm.id}>
                                <div className='cartCardView'>
                                    <h2>{card.name}</h2>
                                    <h3>Quantity: {itm.quantity}</h3>
                                    <img src={card.img}/>
                                    <p>{card.descr}</p>
                                    <h3>Price: {(Number(card.price) * itm.quantity).toFixed(2)}</h3>
                                </div>
                                <button onClick={(e) => addToCartHandler(e, currentUser.id, card.id)}>Add Another to Cart</button>
                                <button onClick={(e) => removeFromCartHandler(e, currentUser.id, card.id)}>Remove from Cart</button>
                            </div>
                        )
                    })
                    :null
                }
            </div>
            <div id='cartInfo'>
                <h2>Total Price: {totalPrice.toFixed(2)}</h2>
                <Link to='/checkout'>
                    <button>Checkout!</button>
                </Link>
            </div>
        </div>
    </div>
  )
}