import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Nav = () => {
    return (
        <div id="navBar">
            <h1>This is the navbar placeholder</h1>
            <Link to='#'>Home</Link>
            <Link to='#'>All Cards</Link>
            <Link to='#'>Type</Link>
            <Link to='#'>Generation</Link>
            <Link to='#'>User</Link>
            <Link to='#'>Cart</Link>
        </div>
    )
}

export default Nav;