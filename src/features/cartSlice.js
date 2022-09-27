import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getCartThunk = createAsyncThunk('cart/getCartThunk', async (id) =>{
    try{
        //takes userId as param
        const {data} = await axios.get(`api/order/${id}/cart`)
        console.log(data);
        return data;
    } catch (ex){
        next(ex)
    }
});

export const addToCart = createAsyncThunk('cart/addToCart', async (userId, productId) =>{
    try{
        console.log(userId)
        console.log(productId)
        const {data} = await axios.put(`/api/order/${userId}/cart/${productId}`)
        console.log('expected data from api call: ');
        console.log(data);
        return data;
    }
    catch(ex){
        console.log(ex)
        next(ex)
    }
})

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCartThunk.fulfilled, (state, action) => {
            // Add cart to the state array
            console.log(action.payload);
            return action.payload;
          });
        builder.addCase(addToCart.fulfilled, (state, action) => {
            console.log(action.payload);
            return action.payload;
        })  
    }
})

export const selectCart = (state) => state.cart; 

// export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;