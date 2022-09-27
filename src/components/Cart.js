import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, selectProducts } from '../features/productsReducer';

const Cart = () => {
    const dispatch = useDispatch();
    const cards = useSelector(selectProducts);

    useEffect(() => {

        dispatch(getProducts);
    })

    console.log(cards);

    return (
        <div className = 'usersContainer'>
            <div className=''>

            </div>
        </div>
    )
}

export default Cart;