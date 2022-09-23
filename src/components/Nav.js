import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Nav = () => {
    const products = useSelector(state => state.products);
    return (
        <div id="navBar">
            <Link to='/'>Home (this will eventually be a logo/icon instead)</Link>
            <ul>
                <li>
                    <Link to='/products'>All Cards ({products.length})</Link>
                </li>
                <li><Link to='#'>Type</Link>
                    <ul>
                        <li><Link to='#'>Fire</Link></li>
                        <li><Link to='#'>Water</Link></li>
                        <li><Link to='#'>Ground</Link></li>
                        {/* etc... you get the idea */}
                    </ul>
                </li>
                <li><Link to='#'>Generation</Link>
                    <ul>
                        <li><Link to='#'>SoulSilver</Link></li>
                        <li><Link to='#'>Sword and Shield</Link></li>
                        <li><Link to='#'>Diamond and Pearl</Link></li>
                    </ul>
                </li>
                <li><Link to='/users'>User</Link></li>
                <li><Link to='#'>Cart</Link></li>
            </ul>
        </div>
    )
}

export default Nav;