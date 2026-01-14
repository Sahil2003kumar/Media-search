import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:"search",
    initialState:{
        query:'',
        activeTab:'photos',
        results:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state, action){

        },
        setAciveTabs(state,action){

        },
        setoading(state,action){

        },
        setResults(state,action){

        },
        setError(state,action){
            
        }
    }
})