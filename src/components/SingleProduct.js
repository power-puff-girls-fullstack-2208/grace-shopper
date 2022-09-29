import { useDispatch, useSelector } from 'react-redux';
import { getProduct, selectProduct } from '../features/singleProductReducer';
import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import { selectCurrentUser } from '../features/authSlice';
import { addToCart } from '../features/cartSlice';

const SingleProduct = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const product = useSelector(selectProduct);
    const user = useSelector(selectCurrentUser);

    useEffect(() => {
        dispatch(getProduct(params.id));
        window.scrollTo(0,0);
    }, [dispatch]);

    const addToCartHandler = async (e, productId, userId = undefined) =>{
        e.preventDefault();
        if (userId) {
            window.alert(`${product.name} added to cart!`)
            dispatch(addToCart({ userId, productId } ) );
        } else {
            window.alert('Please register/login to add to your cart.');
        }
    }

    return (
        <div className='content'>
            {product.id ? 
            <div className='singleProductContainer'>
                <div className='singleProduct'>
                    <img src={product.img}/>
                    <p>{product.releasedOn}<br></br>
                    {product.series}</p>
                </div>
                <div className='singleProductInfo'>
                    <h1>{product.name}</h1>
                    <i>{product.descr}</i>
                    <p>Rarity: {product.rarity}</p><p>Series: {product.series}</p>
                    <div><i>Max HP: {product.hp}<br></br>
                    Attacks: {<ul>{product.attacks.map((attack, ind) => <li key={ind}>{attack}</li>)}</ul>}</i></div>
                    <p><i>Weaknesses: {product.weaknesses}<br></br>
                    Retreat Cost: {product.retreatCost ? product.retreatCost.join(', ') : 'none'}</i></p>
                    <h3>Price: {product.price}</h3>
                    <button onClick={(e) => user ? addToCartHandler(e, product.id, user.id) : addToCartHandler(e, product.id)}>Add To Cart!</button>
                </div>
            </div>
            :null}
        </div>
    );
};

export default SingleProduct;
    

