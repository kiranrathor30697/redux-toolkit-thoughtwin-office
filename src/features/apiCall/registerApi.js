import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerApi = createAsyncThunk(
    'registerApi',
    async() => {
        let res = await axios.post('http://192.168.1.11:8000/api/user/registeredUser',{
            headers:{
                Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmIwNjFkZTVhN2VhZTY2YmMzZjU5NGUiLCJpYXQiOjE2NTY5NDA0NzN9.BW_uUoGBEW7C_QVpQ1V5LKHBCE6r3nK57O-8vaREnpY'
            }
        })
        console.log(res)
    }
)