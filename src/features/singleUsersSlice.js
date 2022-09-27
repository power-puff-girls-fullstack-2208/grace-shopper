import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getUser = createAsyncThunk('singleUser/getUser', async (id) => {
   try {
        const { data } = await axios.get(`/api/users/${id}`)
        return data
    }
    catch (ex){
        console.log(ex)
    }
})

//thunk that gets the cart goes here
export const getCart = createAsyncThunk('singleUser/getCart', async (id) =>{
    try{
        const {data} = await axios.get(`api/order/${id}`)
        return data;
    } catch (ex){
        next(ex)
    }
})

  const initialState = {
    loading: false,
    user: {},
    cart: {},
    error: ''

}

const userSlice = createSlice({
    name: 'singleUser',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true
        },
        [getUser.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload
        },
        [getUser.rejected]: (state) => {
            state.loading = false
        },
        [getCart.fulfilled]: (state, action) => {
            state.loading = false;
            state.cart = action.payload;
        }
    }    
})



export default userSlice.reducer