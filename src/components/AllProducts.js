import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, selectProducts } from '../features/productsReducer';
import ViewCard from './ViewCard';

const AllProducts = () => {
    const { type, rarity } = useParams();
    const dispatch = useDispatch();
    const products = type ? useSelector(selectProducts).filter(card => card.tags.some(tag => tag.type === type)) :
                    rarity ? useSelector(selectProducts).filter(card => card.rarity === rarity) : useSelector(selectProducts);

    useEffect(() => {
        dispatch(getProducts());
        // console.log('weve dispatched our getALLProducts');
    }, [type, dispatch]);

    return (
        <div className = 'productsContainer content'>
            <div className="contentContainer">
                {products && products.length ? products.map((product) =>
                <ViewCard card={product} key={product.id}/>
                ): 'Loading products!'}
            </div>
        </div>
    )
}

export default AllProducts;