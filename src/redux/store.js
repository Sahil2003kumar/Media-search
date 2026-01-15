import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features/searchSlice'
// making the store 
export const store = configureStore({
    reducer:{
        search:searchReducer,
    }
})