import React from "react";
import ViewCard from "./ViewCard";

// this is the component that will show all the products in paginated divs
const ProductPaginated = ({products}) => {
    return (
        <div className="productsContainer">
            {products && products.length ? products.map((product) =>
            <ViewCard card={product} key={product.id}/>
            ): 'Loading products!'}
        </div>
    )
}

export default ProductPaginated;