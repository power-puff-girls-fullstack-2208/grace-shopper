import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    try {
        const { data } = await axios.get('/api/products');
        return data;
    } catch(error) {
        console.error(error);
    }
});

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const selectProducts = (state) => state.products;
export default productsSlice.reducer;


