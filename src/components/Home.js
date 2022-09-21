import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="content">
            <div id="banner">
                <div id="bannerImg">
                    <button onClick={() => {}}>Shop our cards</button>
                </div>
                <div id="bannerInfo">
                    <div>
                        <img src="" alt="free shipping logo"/>
                        <p>Free shipping on US orders above $50</p>
                    </div>
                    <div>
                        <img src="" alt="secure payment logo"/>
                        <p>Fast and Easy, 100% secure payment</p>
                    </div>
                    <div id="bannerButtons">
                        <img src="" alt="secure payment logo"/>
                        <p>Fast and Easy, 100% secure payment</p>
                    </div>
                </div>
            </div>
            <div id="cardShowcase">

            </div>
        </div>
    )
}

export default Home;