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

    * {
        display: flex;
    }

    a {
        color: black;
        margin: 5px;
    }
      
    a:hover {
        color: maroon;
        margin: 5px;
    }

    li {
        display: block;
        transition-duration: 0.5s;
       }
       
       li:hover {
         cursor: pointer;
       }

       ul {
        margin: 0;
        padding: 0;
       }
       
       ul li ul {
         visibility: hidden;
         opacity: 0;
         position: absolute;
         transition: all 0.5s ease;
         margin-top: 1rem;
         left: 0;
         display: none;
       }
       
       ul li:hover > ul,
       ul li ul:hover {
         visibility: visible;
         opacity: 1;
         display: block;
       }
       
       ul li ul li {
         clear: both;
         width: 100%;
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
            </ul>
            <Link to='#'>User</Link>
            <Link to='#'>Cart</Link>
        </NavBar>
    )
}

export default Nav;