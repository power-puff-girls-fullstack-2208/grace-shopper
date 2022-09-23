import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getRarities, getTypes } from "../store";

const Nav = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    // gets an array of types and rarities from the state after first render
    let types = useSelector(state => state.nav.types);
    let rarities = useSelector(state => state.nav.rarities);

    React.useEffect(() => {
        dispatch(getTypes());
        dispatch(getRarities());
        console.log('rendering');
    }, []);

    return (
        <div id="navBar">
            <Link to='/'>Home (this will eventually be a logo/icon instead)</Link>
            <ul>
                <Link to='/products' key='all'>
                    <li>All Cards ({products.length})</li>
                </Link>
                
                <li key='type'>Type
                    <ul>
                        {types ? types.map(type => <Link to={`/products/type/${type.type}`} key={type.id}><li>{type.type}</li></Link>) : null}
                    </ul>
                </li>
                <li key='rarity'>Rarity
                    <ul>
                        {rarities ? rarities.map((rarity, ind) => <Link to={`/products/rarity/${rarity}`} key={ind}><li>{rarity}</li></Link>) : null}
                    </ul>
                </li>
                <Link to='/user' key='user'><li>User</li></Link>
                <Link to='#' key='cart'><li>Cart</li></Link>
            </ul>
        </div>
    )
}

export default Nav;