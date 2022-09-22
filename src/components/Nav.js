import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';
// package to deal with styling by component

const NavBar = styled.div`
    padding: 8px;
    text-align: center;
    width: 100vw;
    position: sticky;
    top: 0px;
    display: flex;
    justify-content: space-between;
    justify-items: space-between;
    background-color: gray;

    * {
        display: flex;
        justify-content: space-evenly;
    justify-items: space-evenly;
    }
`

const Nav = () => {
    return (
        <NavBar>
            <Link to='#'>Home</Link>
            <ul>
                <li>
                    <Link to='#'>All Cards</Link>
                </li>
                <li><Link to='#'>Type</Link>
                    <ul>
                        <li><Link to='#'>Fire</Link></li>
                        <li><Link to='#'>Water</Link></li>
                        <li><Link to='#'>Ground</Link></li>
                    </ul>
                </li>
                <li><Link to='#'>Generation</Link>
                    <ul>
                        <li><Link to='#'>SoulSilver</Link></li>
                        <li><Link to='#'>Sword and Shield</Link></li>
                        <li><Link to='#'>Diamond and Pearl</Link></li>
                    </ul>
                </li>
                <li><Link to='#'>User</Link></li>
                <li><Link to='#'>Cart</Link></li>
            </ul>
        </NavBar>
    )
}

export default Nav;