import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginApi = createAsyncThunk(
    'login',
    async(data)=>{
        try {
            let res = await axios.post('http://192.168.1.11:8000/api/user/login',data);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
)