import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getApi = createAsyncThunk(
    'get',
    async(token)=>{
        let getData = await axios.get('http://192.168.1.11:8000/api/user/registeredUser',{
            headers:{
                Authorization:token
            }
        })
        // console.log(getData)
        return getData.data
    }

)

const getSlice = createSlice({
    name:'get',
    initialState:{
        data:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getApi.fulfilled,(state,action)=>{
            state.data = action.payload
        })
    }
})

export default getSlice.reducer