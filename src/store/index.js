import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/singleProductReducer";
import productsReducer from "../features/productsReducer";
import usersReducer from "../features/usersSlice"
import authReducer from '../features/authSlice'


export const store = configureStore({
        reducer: {
            products: productsReducer,
            product: productReducer,
            users: usersReducer,
            auth: authReducer,
    }
});

