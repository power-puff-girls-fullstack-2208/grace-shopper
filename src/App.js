import React from "react";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import store from "../src/store/index"
import User from "./components/User";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store = {store} >
            <div>
                <Nav/>
                <main>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path= '/login' element={<Login />} />
                        <Route path= '/register' element={<Register />} />
                        <Route path= '/users' element={<User />} />
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