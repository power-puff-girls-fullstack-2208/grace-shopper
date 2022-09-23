import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getRarities, getTypes, selectRarities, selectTypes } from "../features/filterReducer";
import { selectProducts } from "../features/productsReducer";

const Nav = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    // gets an array of types and rarities from the state after first render
    let types = useSelector(selectTypes);
    let rarities = useSelector(selectRarities);

    React.useEffect(() => {
        dispatch(getTypes());
        dispatch(getRarities());
    }, []);

    return (
        <div id="navBar">
            <Link to='/'>Home (this will eventually be a logo/icon instead)</Link>
            <ul>
                {/* link that leads to all the cards */}
                <Link to='/products' key='all'>
                    <li>All Cards ({products.length})</li>
                </Link>
                {/* dropdown menu that has links to view cards by a certain type */}
                <li key='type'>Type
                    <ul>
                        {types ? types.map(type => <Link to={`/products/type/${type.type}`} key={type.id}><li>{type.type}</li></Link>) : null}
                    </ul>
                </li>
                {/* dropdown menu that has links to view cards by a certain rarity */}
                <li key='rarity'>Rarity
                    <ul>
                        {rarities ? rarities.map((rarity, ind) => <Link to={`/products/rarity/${rarity}`} key={ind}><li>{rarity}</li></Link>) : null}
                    </ul>
                </li>
                {/* link the leads to user profile OR log-in/sign-up page */}
                <Link to='/user' key='user'><li>User</li></Link>
                {/* link that leads to the user (or guest) shopping cart */}
                <Link to='#' key='cart'><li>Cart</li></Link>
            </ul>
        </div>
    )
}

export default Nav;