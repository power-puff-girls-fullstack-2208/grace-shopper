import React from "react";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import User from "./components/User";

const App = () => {
    
    return (
        <BrowserRouter>
            <div>
                <Nav/>
                <main>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path='/products' element={<AllProducts/>}/>
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