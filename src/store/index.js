import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/singleProductReducer";
import productsReducer from "../features/productsReducer";
import usersReducer from "../features/usersSlice"

const store = configureStore({
        reducer: {
            products: productsReducer,
            product: productReducer,
            users: usersReducer
        },
    }
);

export default store;