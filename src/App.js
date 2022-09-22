import React from "react";
import AllProducts from "./components/AllProducts";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

function App(){

    const products = useSelector((state) => state.todos);

    // return (
    //     <div className="App">
    //       <Routes>
    //         <Route path="/products" element = {<AllProducts/>}/>
    //       </Routes>
    //     </div>
    //   );

    return (
        <div>
            <main>
            <AllProducts/>
            </main>
        </div>
    )
}
    

export default App;