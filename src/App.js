import React from "react";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <p>main app</p>
                {/* Nav component will go here */}
                <main>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path='/navtest' element={<Nav/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;