import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    try {
        const { data } = await axios.get('api/products');
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
            // console.log(action.payload)
            return action.payload;
        });
    },
});

export const selectProducts = (state) => state.products;
export default productsSlice.reducer;

// const handleFetch = async () => {
//     const { data } = await axios.get('http://localhost:3000/products')
//     console.log(data);
//     return data
// }

// export const getProducts = createAsyncThunk('products/getProducts', async () => {
//     try {
//         //const data  = await axios.get('api/products');
//         const data = await handleFetch();
//         console.log(data);
//         return data;
//     } catch(error) {
//         console.error(error);
//     }
// });

// export const productsSlice = createSlice({
//     name: 'products',
//     initialState: {products: []},
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(getProducts.fulfilled, (state, action) => {
//             state.products.push(action.payload);
//         });
//     },
// }); 



