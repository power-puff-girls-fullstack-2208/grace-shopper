import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, selectProducts } from '../features/productsReducer';

const AllProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    useEffect(() => {
        dispatch(getProducts());
        // console.log('weve dispatched our getALLProducts');
    }, [dispatch]);

    return (
        <div className = 'productsContainer'>
            <div id="contentContainer">
                {products && products.length ? products.map((product) =>
                <div id='content' key={product.id}>
                    <Link to = {`/products/${product.id}`}>
                        <h3>product Name: {product.name}</h3>
                    </Link>
                    <h3>product Name: {product.name}</h3>
                    <img className='productImg' src= {product.img}/>
                    <p>Types: {product.tags.map(tag => `${tag.type}`)}</p>
                </div>
                ): 'Loading products!'}
            </div>
        </div>
    )
}

export default AllProducts;