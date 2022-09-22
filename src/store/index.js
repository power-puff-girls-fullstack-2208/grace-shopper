import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/singleProductReducer";
import productsReducer from "../features/productsReducer";

export const store = configureStore({
        reducer: {
            products: productsReducer,
            product: productReducer,
        },
    }
);

