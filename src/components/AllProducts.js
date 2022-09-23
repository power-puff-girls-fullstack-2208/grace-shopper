import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../features/productsReducer';
import { selectProducts } from '../features/productsReducer';
const AllProducts = () => {
    const dispatch = useDispatch();
    //const products = useSelector(state => state.products);
    const products = useSelector(selectProducts);

    useEffect(() => {
        //why does running getProducts and not running it throw such a crazy error?
        //whether or not 
        dispatch(getProducts());
        // console.log('weve dispatched our getALLProducts');
    }, [dispatch]);

    // console.dir(getProducts);

    return (
        <div className = 'productContainer'>
            <div className="contentContainer">
                {products && products.length ? products.map((product) =>
                <div className='innerContainer' key={product.id}>
                    <Link to = {`/products/${product.id}`}>
                        <h3>product Name: {product.name}</h3>
                    </Link>
                    <h3>product Name: {product.name}</h3>
                    <img className='productImg' src= {product.img}/>
                    <p>Types: {product.tags.map(tag => `${tag.type}`)}</p>
                    <p>{product.descr}</p>
                </div>
                ): 'Loading products!'}
            </div>
        </div>
    )
}

export default AllProducts;