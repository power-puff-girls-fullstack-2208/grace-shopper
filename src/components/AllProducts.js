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

    const filterProducts = (productArray, filterOptions) => {
        if (filterOptions.length === 0) return productArray;

        console.dir (productArray.filter(card => {
            console.dir(card)
            return (filterOptions.includes(card.rarity) || filterOptions.includes(card.series) || card.tags.some(tag => filterOptions.includes(tag.type)));
        }))
        return (productArray.filter(card => {
            return (filterOptions.includes(card.rarity) || filterOptions.includes(card.series) || card.tags.some(tag => filterOptions.includes(tag.type)));
        }))
    }

    const sortProducts = (productArray, sortOption) => {
        switch(sortOption) {
            case 'price-asc':
                return [...productArray].sort((a, b) => parseFloat(a.price) > parseFloat(b.price) ? 1 : parseFloat(a.price) < parseFloat(b.price) ? -1 : 0)
            case 'price-desc':
                return [...productArray].sort((a, b) => parseFloat(a.price) < parseFloat(b.price) ? 1 : parseFloat(a.price) > parseFloat(b.price) ? -1 : 0)
            case 'alpha-up':
                return [...productArray].sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0)
            case 'alpha-down':
                return [...productArray].sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            case 'none':
                return productArray;
        }
    }
    const [optionalFilter, setOptionalFilter] = React.useState([]);
    const [appliedFilters, setAppliedFilters] = React.useState([]);
    const [sort, setSort] = React.useState('none');
    const products = filterProducts(sortProducts(type || rarity ? useSelector(selectProducts).filter(card => card.tags.some(tag => tag.type === type) || card.rarity === rarity) : useSelector(selectProducts), sort), appliedFilters);


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
    }

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

    const handleOptions = event => {
        setSort(event.target.value);
    }

    console.dir(appliedFilters);

    useEffect(() => {
    }, [appliedFilters, sort]);
    return (
        <div className = 'productsContainer content'>
            <div className='filtersPrompt'>
                <button id='filterButton' onClick={showFilters}>Show filtering options</button>
                <label htmlFor='filter-options'>Filter products by:</label>
                <select name='filter-options' onChange={handleOptions} defaultValue={sort}>
                    <option value='price-asc'>Price: $ - $$$</option>
                    <option value='price-desc'>Price: $$$ - $</option>
                    <option value='alpha-up'>Alphabetical: Z - A</option>
                    <option value='alpha-down'>Alphabetical: A - Z</option>
                    <option value='none'>No sorting</option>
                </select>
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