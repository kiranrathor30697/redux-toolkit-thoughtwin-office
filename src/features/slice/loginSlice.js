import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginApi = createAsyncThunk(
    'login',
    async({userName , password})=>{
        try {
            let res = await axios.post('http://192.168.1.11:8000/api/user/login',{
                userName,
                password
            });
            console.log(res)
            localStorage.setItem('rtk_token',JSON.stringify(res.data.data.token))
            localStorage.setItem('rtk_userData',JSON.stringify(res.data.data))
            
        } catch (error) {
            console.log(error)
        }
    }
)
 const loginSlice = createSlice({
    name:'login',
    initialState:{
            data:{},
            status:'idle',
            loading:false
        },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(loginApi.fulfilled,(state,action)=>{
             state.data = action.payload;
             state.status = "idle"
        })
        .addCase(loginApi.pending,(state)=>{
            state.status = "loading"
       })
       .addCase(loginApi.rejected,(state)=>{
            state.status = "error"
        })
    }
})
export const {rootReducer} = loginSlice.actions

export default loginSlice.reducer
