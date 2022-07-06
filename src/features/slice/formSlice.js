import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name:'form',
    initialState:[],
    reducers:{
        form_data : (state,action) => {
            state.push(action.payload)
        }
    }
})

export default formSlice.reducer;

export const {form_data} = formSlice.actions