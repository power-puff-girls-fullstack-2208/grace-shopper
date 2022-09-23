import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productReducer from "../features/singleProductReducer";
import productsReducer from "../features/productsReducer";
import filterReducer from "../features/filterReducer";

export const store = configureStore({
        reducer: {
            products: productsReducer,
            product: productReducer,
            nav: filterReducer,
        },
    }
);

