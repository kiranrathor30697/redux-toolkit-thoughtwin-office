import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../features/slice/formSlice";
import getSlice from "../features/slice/getSlice";
import  incDecSlice from "../features/slice/incDecSlice";
import loginSlice from "../features/slice/loginSlice";
import registerSlice from '../features/slice/registerSlice';
import updateSlice from "../features/slice/updateSlice";

export const store = configureStore({
    reducer:{
        register :  registerSlice,
        login    :  loginSlice,
        get      :  getSlice,
        update   :  updateSlice,
        inc_dec  :  incDecSlice,
        form     :  formSlice
    }
})