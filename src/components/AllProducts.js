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
        // dispatch(getProducts());
        // console.log('weve dispatched our getALLProducts');
    }, [type, dispatch]);

    return (
        <div className = 'productsContainer content'>
            <div className='filtersPrompt'>
                <button id='filterButton'>Show filtering options</button>
            </div>
            <div className='filters-overlay'>
                <form id='filters-form'>
                    <div id='poke-type'>
                        <h3>By Pokemon Type:</h3>
                        <input type='checkbox' id='poke-type-type' name='type' value='true'></input>
                        <label for='poke-type-type'>TYPE</label>
                    </div>
                    <div id='poke-rarity'>
                    <h3>By Pokemon Rarity:</h3>
                        <input type='checkbox' id='poke-type-rarity' name='rarity' value='true'></input>
                        <label for='poke-type-rarity'>RARITY</label>
                    </div>
                    <div id='poke-sets'>
                    <h3>By Card Set:</h3>
                        <input type='checkbox' id='poke-type-set' name='set' value='true'></input>
                        <label for='poke-type-set'>SET</label>
                    </div>
                    <div id='filter-buttons'>
                        <button onClick={() => {}}>Cancel</button>
                        <button type='submit' onClick={() => console.log('submitted!')}>Apply</button>
                    </div>
                </form>
            </div>
            <div className="contentContainer">
                {products && products.length ? products.map((product) =>
                <ViewCard card={product} key={product.id}/>
                ): 'Loading products!'}
            </div>
        </div>
    )
}

export default AllProducts;