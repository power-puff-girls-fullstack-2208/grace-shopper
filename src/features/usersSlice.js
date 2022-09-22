import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const getUsers = createAsyncThunk('users/getUsers', () => {
    return axios.get('/api/users')
        .then((res) => {
            return res.data
        })
})

export const getUser = createAsyncThunk('users/getUser', (id) => {
   try {return axios.get(`/api/users/${id}`)
        .then((res) => {
            return res.data
        })
    }
    catch (ex){
        next(ex)
    }
})

export const deleteUser = (id) => {
    return async (dispatch) => {
        await axios.delete(`/api/users/${id}`)
        dispatch(removeUser(id))
    }
}

export const addNewUser = (user) => {
    return async (dispatch) => {
      const { data: newUser } = await axios.post('/api/users', user)
      dispatch(addUser(newUser))
    }
  }
  
  export const updateUser = (user, id) => {
    return async (dispatch) => {
      const { data: updatedUser } = await axios.put(`/api/users/${id}`, user)
      dispatch(updateUsers(updatedUser))
    }
  }  

  const initialState = {
    loading: false,
    users: [],
    user: {},
    error: ''
}

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            const newUser = action.payload
            state.users.push(newUser)
        },
        removeUser: (state, action) => {
            const userId = action.payload
            state.users = state.users.filter((user) => user.id !== Number(userId))
            return state
        },
        updateUsers: (state, action) => {
            state.users.map(user => user.id === action.payload.id ? user: action.payload)
        }
    },
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.loading = true
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false
            state.users = action.payload
        },
        [getUsers.rejected]: (state) => {
            state.loading = false
        },
        [getUsers.pending]: (state) => {
            state.loading = true
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload
        },
        [getUsers.rejected]: (state) => {
            state.loading = false
        }
    }    
})

export const { addUser, removeUser, updateUsers } = usersSlice.actions
export default usersSlice.reducer