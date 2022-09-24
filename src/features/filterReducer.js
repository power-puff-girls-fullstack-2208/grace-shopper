import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import pokemon from 'pokemontcgsdk';

// filterReducer are the thunks/reducer that deal with filtering options:
// pokemon type and pokemon rarity
// goes into the main store as nav:filterReducer
// as it is used mainly for the nav bar, but also globally on AllProducts (eventually, yet to implement)

export const getTypes = createAsyncThunk('getTypes', async () => {
    try {
        const { data } = await axios.get('/api/products/types');
        return data;
    } catch(error) {
        console.error(error);
    }
});

export const getRarities = createAsyncThunk('getRarities', async () => {
    try {
        // data from pokemon api does not need to be dereferenced :)
        const data = await pokemon.rarity.all();
        return data;
    } catch(error) {
        console.error(error);
    }
});

export const getSets = createAsyncThunk('getSets', async () => {
    try {
        const data = await pokemon.set.all();
        console.log(data);
        return data;
    } catch(error) {
        console.error(error);
    }
});

export const navSlice = createSlice({
    name: 'nav',
    initialState: {},
    extraReducers: (builder) => {
        builder.addCase(getTypes.fulfilled, (state, action) => {
            return {...state, types: action.payload};
        });
        builder.addCase(getRarities.fulfilled, (state, action) => {
            return {...state, rarities: action.payload};
        })
        builder.addCase(getSets.fulfilled, (state, action) => {
            return {...state, sets: action.payload};
        })
    },
});

export const selectTypes = (state) => state.nav.types;
export const selectRarities = (state) => state.nav.rarities;
export default navSlice.reducer;