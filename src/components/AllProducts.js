import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts, selectProducts } from '../features/productsReducer';

const AllProducts = () => {
    const { type, rarity } = useParams();
    console.log(type);
    console.log(rarity);
    const dispatch = useDispatch();
    const products = type ? useSelector(selectProducts).filter(card => card.tags.some(tag => tag.type === type)) :
                    rarity ? useSelector(selectProducts).filter(card => card.rarity === rarity) : useSelector(selectProducts);

    useEffect(() => {
        dispatch(getProducts());
        // console.log('weve dispatched our getALLProducts');
    }, [type, dispatch]);

    return (
        <div className = 'productsContainer'>
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