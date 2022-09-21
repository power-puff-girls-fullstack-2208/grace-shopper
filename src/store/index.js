import { configureStore } from "@reduxjs/toolkit";
import singleProductReducer from "../features/singleProductReducer";
import productReducers from "../features/productReducers";

const store = configureStore({
        reducer: {
            products: productReducers,
            singleProduct: singleProductReducer,
        },
    }
);

export default store;