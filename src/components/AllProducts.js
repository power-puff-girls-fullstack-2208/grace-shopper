import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, selectProducts } from '../features/productsReducer';
import ViewCard from './ViewCard';
import { getRarities, getSets, getTypes, selectRarities, selectSets, selectTypes } from '../features/filterReducer';

const AllProducts = () => {
    const dispatch = useDispatch();
    const { type, rarity } = useParams();
    const types = useSelector(selectTypes);
    const rarities = useSelector(selectRarities);
    const sets = useSelector(selectSets);
    const products = type ? useSelector(selectProducts).filter(card => card.tags.some(tag => tag.type === type)) :
                    rarity ? useSelector(selectProducts).filter(card => card.rarity === rarity) : useSelector(selectProducts);

    const [optionalFilter, setOptionalFilter] = React.useState([]);
    const [appliedFilters, setAppliedFilters] = React.useState([]);

    const showFilters = () => {
        const filtersScreen = document.querySelector('#filters-screen');
        filtersScreen.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
    }

    const cancelFilters = () => {
        const filtersScreen = document.querySelector('#filters-screen');
        filtersScreen.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }

    const applyFilters = function(event) {
        event.preventDefault();
        setAppliedFilters(optionalFilter);
        cancelFilters();
        console.log('filters applied!');
    }

    const handleOptionCheckboxes = event => {
        if (event.target.checked)  {
            setOptionalFilter([...optionalFilter, event.target.id])
        } else {
            let tempValue = optionalFilter.findIndex(filter => filter === event.target.id);
            const temp = [...optionalFilter];
            temp.splice(tempValue, 1);
            console.dir(temp)
            console.dir(tempValue)
            setOptionalFilter(temp);
        }
    }

    useEffect(() => {
        // dispatch(getProducts());
        // console.log('weve dispatched our getALLProducts');
    }, [appliedFilters]);

    console.dir(optionalFilter);

    return (
        <div className = 'productsContainer content'>
            <div className='filtersPrompt'>
                <button id='filterButton' onClick={showFilters}>Show filtering options</button>
            </div>
            <div id='filters-screen'>
                <form id='filters-form' onSubmit={applyFilters}>
                    <div id='poke-type' className='optionsOuter'>
                        <h3 className='optionsHeader'>By Pokemon Type:</h3>
                        {types ? types.map(type => {
                            return (
                                <div key={type.id} className='optionsCheckbox'>
                                    <input type='checkbox' id={type.type} name='typeOptions' checked={optionalFilter.includes(type.type) ? true : false} onChange={handleOptionCheckboxes}></input>
                                    <label htmlFor={type.type}>{type.type}</label>
                                </div>
                            )
                        }) : null}
                    </div>
                    <hr/>
                    <div id='poke-rarity' className='optionsOuter'>
                        <h3 className='optionsHeader'>By Pokemon Rarity:</h3>
                        {rarities ? rarities.map(rarity => {
                            return (
                                <div key={rarity} className='optionsCheckbox'>
                                    <input type='checkbox' id={rarity} name='rarityOptions' value='true' onChange={handleOptionCheckboxes}></input>
                                    <label htmlFor={rarity}>{rarity}</label>
                                </div>
                            )
                        }) : null}
                    </div>
                    <hr/>
                    <div id='poke-sets' className='optionsOuter'>
                        <h3 className='optionsHeader'>By Card Set:</h3>
                        {sets ? sets.map(set => {
                            return (
                                <div key={set.id} className='optionsCheckbox'>
                                    <input type='checkbox' id={set.name} name='setOption' value='true' onChange={handleOptionCheckboxes}></input>
                                    <label htmlFor={set.name}>{set.name}</label>
                                </div>
                            )
                        }) : null}
                    </div>
                    <div id='filter-buttons'>
                        <button onClick={cancelFilters}>Cancel</button>
                        <button type='submit' onClick={() => console.log('submitted!')}>Apply</button>
                    </div>
                </form>
                <div id='filters-overlay' onClick={cancelFilters}></div>
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