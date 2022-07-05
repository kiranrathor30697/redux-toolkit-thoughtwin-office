import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateApi = createAsyncThunk(
    'update',
    async(token,state)=>{
        try {
            let result =await axios.post('http://192.168.1.11:8000/api/user/update',state,{
                headers:{
                    Authorization:token
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
)
