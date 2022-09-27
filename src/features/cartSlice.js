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

// export const addToCart = createAsyncThunk('', async () =>{
//     try{
//         const {data} = await axios.put(`route goes here`)
//     }
//     catch(ex){
//         next(ex)
//     }
// })

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addToCart(state, action){
        //     //action.payload assumes that the product is passed as a payload from a clickHandler
        //     const itemIndex = state.cartItems.findIndex(
        //         (item) => item.id === action.payload.id)
        //     //if this kind of product is already in the cart    
        //     if(itemIndex >= 0){
        //         state.cartItems[itemIndex].cartQuantity++;
        //     }
        //     else{ //set the quantity of new product to 1
        //         const newProduct = {...action.payload, cartQuantity: 1};
        //         state.cartItems.push(newProduct);
        //     }
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(getCartThunk.fulfilled, (state, action) => {
            // Add cart to the state array
            console.log(action.payload)
            return action.payload;
          });
    }
})

export const selectCart = (state) => state.cart; 

// export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;