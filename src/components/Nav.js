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

    a {
        color: black;
        margin: 5px;
    }
      
    a:hover {
        color: maroon;
        margin: 5px;
    }
`

const Nav = () => {
    return (
        <NavBar>
            <h1>This is the navbar placeholder</h1>
            <Link to='#'>Home</Link>
            <Link to='#'>All Cards</Link>
            <Link to='#'>Type</Link>
            <Link to='#'>Generation</Link>
            <Link to='#'>User</Link>
            <Link to='#'>Cart</Link>
        </NavBar>
    )
}

export default Nav;