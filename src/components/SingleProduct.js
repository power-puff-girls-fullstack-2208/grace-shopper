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

    const addToCartHandler = async (e, userId, productId) =>{
        e.preventDefault();
        await dispatch(addToCart({ userId, productId } ) );
    }

    return (
        <>
        {product ? <>
        <div className='singleProductContainer'>
            <div className='singleProduct'>
                <img src={product.img}/>
                <p>{product.releasedOn}<br></br>
                {product.series}</p>
                </div>
                <div className='singleProductInfo'>
                <h1>{product.name}</h1>
                <p>{product.descr}</p>
                <p>Rarity: {product.rarity}  Series: {product.series}</p>
                <p><i>Max HP: {product.hp}<br></br>
                Attacks: {product.attacks}</i></p>
                <p><i>Weaknesses: {product.weaknesses}<br></br>
                Retreat Cost: {product.retreatCost}</i></p>
                <h3>Price: {product.price}</h3>
                <button onClick={(e) => addToCartHandler(e, user.id, product.id)}>Add To Cart!</button>
                </div>
        </div>
    </>:null}
    </>
    );
};

export default SingleProduct;
    

