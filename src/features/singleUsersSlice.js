import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getUser = createAsyncThunk('singleUser/getUser', async (id) => {
   try {
        const { data } = await axios.get(`/api/users/${id}`)
        console.log(data)
        return data
    }
    catch (ex){
        next(ex)
    }
})

  const initialState = {
    loading: false,
    user: {},
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
        }
    }    
})

export default userSlice.reducer