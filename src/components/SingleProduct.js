import { useDispatch, useSelector } from 'react-redux';
import { getProduct, selectProduct } from '../features/singleProductReducer';
import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';

const SingleProduct = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const product = useSelector(selectProduct);

    useEffect(() => {
        dispatch(getProduct(params.id));
        console.log('we\'ve dispatched our getProduct');
    }, [dispatch]);

    console.dir(product)

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
                <button>Add To Cart!</button>
                </div>
        </div>
    </>:null}
    </>
    );
};

export default SingleProduct;
    

{/* <body><input id='quantity' type='number' min={0}>
<button onclick="increment()">+</button>
<button onclick="decrement()">-</button>
<script>
function increment() {
document.getElementById('quantity').stepUp()
}
function decrement() {
document.getElementById('quantity').stepDown()
} </script><button>Add To Cart!</button></input></body> */}