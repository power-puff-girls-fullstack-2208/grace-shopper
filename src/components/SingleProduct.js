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
        <div className='contentContainer'>
            <div className='singleProduct'>
                <h1>{product.name}</h1>
                <img src={product.img}/>
                <p>{product.descr}</p>
                <h3>Price: {product.price}</h3>
                <button>Add To Cart!</button>
            </div>
        </div>
    </>:null}
    </>
    );
};

export default SingleProduct;
    