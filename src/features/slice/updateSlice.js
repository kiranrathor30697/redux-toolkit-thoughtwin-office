import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateApi = createAsyncThunk(
    'update',
    async(data)=>{
        let email = data.updt.email;
        let profilePic = data.updt.profilePic
        
        let formData = new FormData();
        formData.append('email', email);
        formData.append('profilePic' ,profilePic)

        try {
            let result = await axios.patch('http://192.168.1.11:8000/api/user/update',formData
            ,{
                headers:{
                    Authorization:data.token,
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(result.data)
            localStorage.setItem('rtk_userData',JSON.stringify(result.data))
        } catch (error) {
            console.log(error)
        }
    }
)

const updateSlice = createSlice({
    name:'update',
    initialState:{
        up_dt : [],
        status:'idle',
        loading:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(updateApi.fulfilled,(state,action)=>{
            state.up_dt = action.payload;
            state.status = "idle"

        })
        .addCase(updateApi.pending,(state)=>{
            state.status = 'loading'
        })

        .addCase(updateApi.rejected,(state)=>{
            state.status = 'error'
        })
    }
})
// export const {rootReducer} = updateSlice.actions
// console.log(updateSlice)

// console.log(rootReducer)

export default updateSlice.reducer
