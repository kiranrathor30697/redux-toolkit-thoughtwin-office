import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name:'form',
    initialState:{
        formData:[],
        updateData:[],
        deleteData:[]
    },
    reducers:{
        form_data : (state,action) => {
            state.formData.push(action.payload)
        },
        delete_data : (state,action) => {
            console.log(state)
            state.formData.push(action.payload)
        },
        updt_data : (state,action) => {
            console.log(state)
            state.updateData.push(action.payload)
        }
    },
    
})

export default formSlice.reducer;

export const {form_data} = formSlice.actions
export const {delete_data} = formSlice.actions
export const {updt_data} = formSlice.actions