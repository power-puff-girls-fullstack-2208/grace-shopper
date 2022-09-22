import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div id="footer">
            <ul>
                <li><Link to='#'>About</Link></li>
                <li><Link to='#'>Sitemap</Link></li>
                <li><Link to='#'>FAQ</Link></li>
                <li><Link to='#'>Trust/Safety</Link></li>
                <li><Link to='#'>Shipping</Link></li>
            </ul>
            <footer>©2022 Grace Shopper, Powerpuff Girls</footer>
        </div>
    )
}

export default Footer;