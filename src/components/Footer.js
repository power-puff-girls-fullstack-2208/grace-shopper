import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div id="footer">
            <ul>
                {/* <Link to='#'><li>About</li></Link> */}
                <Link to='#'><li>Sitemap</li></Link>
                {/* <Link to='#'><li>FAQ</li></Link>
                <Link to='#'><li>Trust/Safety</li></Link>
                <Link to='#'><li>Shipping</li></Link> */}
            </ul>
            <footer>©2022 Grace Shopper, Powerpuff Girls</footer>
        </div>
    )
}

export default Footer;