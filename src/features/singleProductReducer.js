import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk('products/getProduct', async (id) => {
    try {
        const { data } = await axios.get(`/api/products/${id}`);
        return data;                      
    } catch(error) {
        console.error(error);
    }
});

export const productSlice = createSlice({
    name: 'product',
    initialState: {},
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const selectProduct = (state) => state.product;
export default productSlice.reducer;