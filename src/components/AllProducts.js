import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, selectProducts } from '../features/productsReducer';
import { selectRarities, selectSets, selectTypes } from '../features/filterReducer';
import { filterProducts, sortProducts, showFilters, cancelFilters } from './allProductsHelper';
import AllPagination from './Pagination';
import ProductPaginated from './ProductPaginated';

const AllProducts = () => {
    const dispatch = useDispatch();
    const { type, rarity } = useParams();
    const types = useSelector(selectTypes);
    const rarities = useSelector(selectRarities);
    const sets = useSelector(selectSets);

    // optionalFilter is the state of the page changing as you check/uncheck filters
    const [optionalFilter, setOptionalFilter] = React.useState([]);
    // appliedFilters is optionalFilter but persists after application
    const [appliedFilters, setAppliedFilters] = React.useState([]);
    // the sorting method, if there is any selected; default is no sorting
    const [sort, setSort] = React.useState('none');
    // products will be selected by being run through filters and sorting if any are present
    const products = filterProducts(sortProducts(type || rarity ? useSelector(selectProducts).filter(card => card.tags.some(tag => tag.type === type) || card.rarity === rarity) : useSelector(selectProducts), sort), appliedFilters);

    const applyFilters = function(event) {
        event.preventDefault();
        setAppliedFilters(optionalFilter);
        cancelFilters();
    }

    // toggles the checkmark
    const handleOptionCheckboxes = event => {
        if (event.target.checked)  {
            setOptionalFilter([...optionalFilter, event.target.id])
        } else {
            let tempValue = optionalFilter.findIndex(filter => filter === event.target.id);
            const temp = [...optionalFilter];
            temp.splice(tempValue, 1);
            setOptionalFilter(temp);
        }
    }

    // will sort the products according to the sort method chosen
    const handleOptions = event => {
        setSort(event.target.value);
    }

    useEffect(() => {
        dispatch(getProducts());
        setAppliedFilters([]);
        setOptionalFilter([]);
        setSort('none');
        window.scrollTo(0,0);
    }, [type, rarity]);

    return (
        <div className = 'content'>
            <div><h1 id="productsTitle">All Products{type ? ' > ' + type : rarity ? ' > ' + rarity : null}</h1></div>
            {/* div where filters and sorting is prompted */}
            <div className='filtersPrompt'>
                <button id='filterButton' onClick={showFilters}>Show filtering options</button>
                <label htmlFor='filter-options'>Sort products by:</label>
                <select name='filter-options' onChange={handleOptions} value={sort}>
                    <option value='none'>No sorting</option>
                    <option value='price-asc'>Price: $ - $$$</option>
                    <option value='price-desc'>Price: $$$ - $</option>
                    <option value='alpha-down'>Alphabetical: A - Z</option>
                    <option value='alpha-up'>Alphabetical: Z - A</option>
                </select>
            </div>
            <div id='selected-filters'>Filtered by: {appliedFilters.length > 0 ? appliedFilters.join(', ') : 'No additional filters applied'}</div>
            <div id='filters-screen'>
                <form id='filters-form' onSubmit={applyFilters}>
                    <div id='filter-buttons'>
                        <button onClick={cancelFilters}>Cancel</button>
                        <button type='submit'>Apply</button>
                    </div>
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
                        <button type='submit'>Apply</button>
                    </div>
                </form>
                <div id='filters-overlay' onClick={cancelFilters}></div>
            </div>
            <div className="productsContainer">
                {products.length > 0 ? 
                    <AllPagination cards={products} type={type} rarity={rarity} filter={appliedFilters} title="Cards" pageLimit={10} dataLimit={40}/>
                : 'Loading up Pokemon...'}
            </div>
        </div>
    )
}

export default AllProducts;