import { createSlice } from "@reduxjs/toolkit";
import { registerApi } from "../apiCall/registerApi";
let state = {
    newData:{}
}
const registerSlice = createSlice({
    name:'counter',
    initialState:state,
    reducers:{},
    extraReducers:{
        [registerApi.fulfilled]:(state,{payload}) => {
            console.log(state)
        }
    }
})
export const {rootReducer} = registerSlice.actions
console.log(registerSlice.actions)
console.log(registerSlice)
export default registerSlice.reducer