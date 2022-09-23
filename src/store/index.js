import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productReducer from "../features/singleProductReducer";
import productsReducer from "../features/productsReducer";
import axios from "axios";

export const getTypes = createAsyncThunk('getTypes', async () => {
    try {
        const { data } = await axios.get('/api/products/types');
        return data;
    } catch(error) {
        console.error(error);
    }
});

export const getRarities = createAsyncThunk('getRarities', async () => {
    try {
        const { data } = await axios.get(`https://api.pokemontcg.io/v2/rarities`);
        return data;
    } catch(error) {
        console.error(error);
    }
});

export const navSlice = createSlice({
    name: 'nav',
    initialState: {},
    extraReducers: (builder) => {
        builder.addCase(getTypes.fulfilled, (state, action) => {
            return {...state, types: action.payload};
        });
        builder.addCase(getRarities.fulfilled, (state, action) => {
            return {...state, rarities: action.payload.data};
        })
    },
});

export const store = configureStore({
        reducer: {
            products: productsReducer,
            product: productReducer,
            nav: navSlice.reducer,
        },
    }
);

