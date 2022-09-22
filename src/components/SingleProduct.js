import { useDispatch, useSelector } from 'react-redux';
import { getProduct, selectProduct } from '../features/singleProductReducer';
import React, { useEffect } from 'react';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const product = useSelector(selectProduct);

    useEffect(() => {
        dispatch(getProduct());
        console.log('we\'ve dispatched our getProduct');
    }, [dispatch]);

    console.dir(product)

    return (
        <>
        {product ? <>
        <div className='productsContainer'>
            <div className='singleProduct'>
                <h1>{product.name}</h1>
                <img src={product.img}/>
                <p>{product.description}</p>
                <h3>Price: {product.price}</h3>
                <button>Add To Cart!</button>
            </div>
        </div>
    </>:null}
    </>
    );
};

export default SingleProduct;
    