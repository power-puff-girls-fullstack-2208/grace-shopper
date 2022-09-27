import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { 
    user: null,
    token: null
}

export const login = createAsyncThunk('auth/login', async (credentials) => {
    try{
        const { data } = await axios.post('/api/users/login', credentials)
        console.log(data)
        return data
    }
    catch (ex){
        console.log(ex)
    }
})

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logOut: (state, action) => {
            state.user = null
            state.token = null
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            const { user, accessToken } = action.payload
            console.log(user, accessToken)
            state.user = user
            state.token = accessToken
        }
    }
})


export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token