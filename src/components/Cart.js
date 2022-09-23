import React, { useEffect } from 'react';
import User from '../../server/db/User';
import { getProduct } from '../features/singleProductReducer';
import { getUser } from '../features/usersSlice';
import { LineItem } from '../../server/db';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './Nav';

export default function Cart() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user)//subscribe to the single user state from the store

    useEffect(() => {
        dispatch(getUser(1)); //later want to getUser by token
       }, [dispatch]);

    const cart = currentUser.getCart(); //fetch the User's cart 
    const lineItems = cart.getLineItems();
    lineItems.filter(itm => itm.quantity); //so that only the lineItems with quantity > 0 included

    //check if User is logged in 
        //hard coded example auth
        //const token = User.authenticate("cplace0", "WvUcrbJTJg5Z")
    //fetch the User
        //user = User.findByToken(token)
        //iffy about this-> const user = useSelector( state => state.getUser(user.id));


  return (
    <div>Cart
        <Nav/>
        <h1>Your Shopping Cart</h1>
        <div id='card-container'>
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

