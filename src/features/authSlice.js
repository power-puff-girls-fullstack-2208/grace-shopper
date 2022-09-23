import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { username: null, token: null}

export const login = createAsyncThunk('auth/checkCredentials', async (credentials) => {
    try{
        const { data } = await axios.post('api/auth', credentials)
        console.log(data)
        return data
    }
    catch (ex){
        next(ex)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.username = action.payload
            state.token = action.payload
        }
    }    
})

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.username
export const selectCurrentToken = (state) => state.auth.token