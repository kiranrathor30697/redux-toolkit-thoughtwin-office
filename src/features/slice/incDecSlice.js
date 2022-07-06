import { createSlice } from "@reduxjs/toolkit";

export const incDecSlice = createSlice({
    name:'inc_dec',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value += 1;
        },
        decrement:(state)=>{
            (state.value > 0)?state.value -=1:state.value = 0
            // state.value -=1;
        }
    }
})
export const {increment , decrement} = incDecSlice.actions;

export default incDecSlice.reducer