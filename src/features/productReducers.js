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
            return action.payload;
        });
    },
});

export const selectProducts = (state) => state.products;
export default productsSlice.reducer;


// export const productSLice = createSlice({
//     name: 'product',
//     initialState: {
//         loading: false,
//         product: {},
//         error: ''
//     },
//     extraReducers: {
//         [getProduct.pending]: (state) => {
//             state.loading = true
//         },
//         [getProduct.fulfilled]: (state, action) => {
//             state.loading = false,
//             state.product = action.payload
//         },
//         [getProduct.rejected]: (state) => {
//             state.loading = false
//         },
//     }
// });


// //ACTION TYPES
// const GET_CARDS = 'GET_CARDS';
// const GET_CARD = 'GET_CARD';

// //ACTION CREATORS
// const _getCards = (cards) => {
//     return {
//         type: GET_CARDS,
//         cards
//     }
// };

// const _getCard = (card) => {
//     return {
//         type: GET_CARD,
//         card
//     }
// };

// export const getCards = () => {
//     return async(dispatch) => {
//         const { data: cards } = await axios.get('/api/products');
//         dispatch(_getCards(cards));
//     }
// };

// export const getCard = (id) => {
//     return async(dispatch) => {
//         const { data: card } = await axios.get(`/api/products/${id}`);
//         dispatch(_getCard(card));
//     }
// };



