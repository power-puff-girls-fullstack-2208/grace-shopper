import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalCost: 0,
    },
    reducers: {
        addToCart(state, action){
            //action.payload assumes that the product is passed as a payload from a clickHandler
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id)
            //if this kind of product is already in the cart    
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity++;
            }
            else{ //set the quantity of new product to 1
                const newProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(newProduct);
            }
        },

    },

})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;