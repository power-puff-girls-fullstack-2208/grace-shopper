import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import store from "../src/store/index"
import User from "./components/User";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store = {store} >
            <div>
                <Nav/>
                <main>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        {/* route that leads to ALL the cards */}
                        <Route path= '/login' element={<Login />} />
                        <Route path= '/register' element={<Register />} />
                        {/* route that leads to all the cards, but filters in cards of a certain type from the nav dropdown */}
                        <Route path='/products/type/:type' element={<AllProducts/>}/>
                        <Route path='/products' element={<AllProducts/>}/>
                        <Route path='/products/:id' element={<SingleProduct/>}/>
                        {/* route that leads to all the cards, but filters in cards of a certain rarity from the nav dropdown */}
                        <Route path='/products/rarity/:rarity' element={<AllProducts/>}/>
                        {/* route that goes to a view single card given its id */}
                        <Route path= '/users' element={<User />} />
                        <Route path = '/cart' element = {<Cart/>}/> 
                        <Route path='/#' element={<br/>/* <Example/> */ }/>
                        
                        {/* add route for your component when you are ready to test it out */}
                        
                    </Routes>
                </main>
                <Footer/>
            </div>
            </Provider>
        </BrowserRouter>
    )
}

export default App;