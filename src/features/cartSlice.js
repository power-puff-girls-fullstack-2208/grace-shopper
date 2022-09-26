import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getCart = createAsyncThunk('singleUser/getCart', async (id) =>{
    try{
        const {data} = await axios.get(`api/order/${id}/cart`)
        return data;
    } catch (ex){
        next(ex)
    }
})

// export const addToCart = createAsyncThunk('', async () =>{
//     try{
//         const {data} = await axios.put(`route goes here`)
//     }
//     catch(ex){
//         next(ex)
//     }
// })



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalCost: 0,
    },
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
        builder.addCase(getCart.fulfilled, (state, action) => {
            // Add campus to the state array
            return action.payload;
          });
    }
})

export const selectCart = (state) => {
    return state.cart;
  }; 

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;