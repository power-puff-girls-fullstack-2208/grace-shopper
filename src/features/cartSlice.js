import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getCartThunk = createAsyncThunk('cart/getCartThunk', async (id) =>{
    try{
        //takes userId as param
        const {data} = await axios.get(`api/order/${id}/cart`)
        return data;
    } catch (ex){
        next(ex)
    }
});

export const addToCart = createAsyncThunk('cart/addToCart', async ( { userId, productId } ) =>{
    try{
        const {data} = await axios.put(`/api/order/${userId}/cart/${productId}`)
        return data;
    }
    catch(ex){
        console.log(ex)
        next(ex)
    }
})

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async ({userId, productId}) =>{
    try{
        const {data} = await axios.put(`/api/order/${userId}/cart/${productId}/decrement`)
        return data;
    }
    catch(ex){
        next(ex)
    }
})

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCartThunk.fulfilled, (state, action) => {
            // Add cart to the state array
            return action.payload;
          });
        builder.addCase(addToCart.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(removeFromCart.fulfilled, (state, action) =>{
            return action.payload;
        })  
    }
})

export const selectCart = (state) => state.cart; 

export default cartSlice.reducer;