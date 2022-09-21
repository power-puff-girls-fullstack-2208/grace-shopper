import React from "react";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Nav/>
                {/* Nav component will go here */}
                <main>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path='/#' element={<br/>/* <Example/> */ }/>
                        {/* add route for your component when you are ready to test it out */}
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;