import React from "react";
<<<<<<< HEAD
import Register from "./components/Register";


function App(){

    return (
        <div>
          <main>
            <Register />
          </main>
        </div>
      );
=======
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Nav/>
                <main>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path='/#' element={<br/>/* <Example/> */ }/>
                        {/* add route for your component when you are ready to test it out */}
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    )
>>>>>>> 5ec4932e223ea0b0945221b5685d9915dbbebbf7
}

export default App;