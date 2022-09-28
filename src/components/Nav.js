import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getRarities, getSets, getTypes, selectRarities, selectTypes } from "../features/filterReducer";
import { getProducts, selectProducts } from "../features/productsReducer";
import pokeball from "../../public/pokeball.png"

const Nav = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    // gets an array of types and rarities from the state after first render
    let types = useSelector(selectTypes);
    let rarities = useSelector(selectRarities);

    React.useEffect(() => {
        dispatch(getTypes());
        dispatch(getRarities());
        dispatch(getProducts());
        dispatch(getSets());
    }, []);

    return (
        <div id="navBar">
            <Link to='/'><img src={pokeball} width='50px' alt="pokeball logo"/></Link>
            <ul>
                {/* link that leads to all the cards */}
                <Link to='/products'>
                    <li>All Cards ({products.length})</li>
                </Link>
                {/* dropdown menu that has links to view cards by a certain type */}
                <li>Type
                    <ul>
                        {types ? types.map(type => <Link to={`/products/type/${type.type}`} key={type.id}><li>{type.type}</li></Link>) : null}
                    </ul>
                </li>
                {/* dropdown menu that has links to view cards by a certain rarity */}
                <li>Rarity
                    <ul>
                        {rarities ? rarities.map((rarity, ind) => <Link to={`/products/rarity/${rarity}`} key={ind}><li>{rarity}</li></Link>) : null}
                    </ul>
                </li>
                <Link to='/users'><li>User</li></Link>
                <Link to='/cart'><li>Cart</li></Link>
            </ul>
        </div>
    )
}

export default Nav;