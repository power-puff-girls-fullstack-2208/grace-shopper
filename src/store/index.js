import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productReducer from "../features/singleProductReducer";
import productsReducer from "../features/productsReducer";
import usersReducer from "../features/usersSlice"
import authReducer from '../features/authSlice'
import singleUserReducer from '../features/singleUsersSlice'
import filterReducer from "../features/filterReducer";


const store = configureStore({
        reducer: {
            products: productsReducer,
            product: productReducer,
            nav: filterReducer,
            users: usersReducer,
            auth: authReducer,
            singleUser: singleUserReducer,
    }
});

export default store
