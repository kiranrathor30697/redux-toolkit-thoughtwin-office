import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { registerApi } from "../apiCall/registerApi";


export const registerApi = createAsyncThunk(
    'register',
    async({userName,email,profilePic,password,confirmPassword}) => {
        let formData = new FormData()
        formData.append('userName',userName)
        formData.append('email',email)
        formData.append('profilePic',profilePic)
        formData.append('password',password)
        formData.append('confirmPassword',confirmPassword)
        let res = await axios.post('http://192.168.1.11:8000/api/user/register',formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
            }
        })
        // console.log(res)
        return res.data
    }
)

const registerSlice = createSlice({
    name:'register',
    initialState:{
        data:[],
        status:'idle',
        loading:false
    },
    reducers:{},
    extraReducers:(builder)=>{
       builder
       .addCase(registerApi.fulfilled,(state,action)=>{
        //    debugger
            state.data = action.payload;
            state.status = "idle"
       })
       .addCase(registerApi.pending,(state)=>{
            state.status = 'loading'
        })

        .addCase(registerApi.rejected,(state)=>{
            state.status = 'error'
        })
       
    }
})
export const {rootReducer} = registerSlice.actions
// console.log(registerSlice.actions)
// console.log(registerSlice)
export default registerSlice.reducer











