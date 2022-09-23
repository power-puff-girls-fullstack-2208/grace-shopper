import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import User from "./components/User";

const App = () => {
    
    return (
        <BrowserRouter>
            <div>
                <Nav/>
                <main>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        {/* route that leads to ALL the cards */}
                        <Route path='/products' element={<AllProducts/>}/>
                        {/* route that leads to all the cards, but filters in cards of a certain type from the nav dropdown */}
                        <Route path='/products/type/:type' element={<AllProducts/>}/>
                        {/* route that leads to all the cards, but filters in cards of a certain rarity from the nav dropdown */}
                        <Route path='/products/rarity/:rarity' element={<AllProducts/>}/>
                        {/* route that goes to a view single card given its id */}
                        <Route path = '/products/:id' element={<SingleProduct/>}/>
                        {/* add route for your component when you are ready to test it out */}
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;