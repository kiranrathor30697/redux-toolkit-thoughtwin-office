import { configureStore } from "@reduxjs/toolkit";
import getSlice from "../features/slice/getSlice";
import loginSlice from "../features/slice/loginSlice";
import registerSlice from '../features/slice/registerSlice';
import updateSlice from "../features/slice/updateSlice";

export const store = configureStore({
    reducer:{
        register :  registerSlice,
        login    :  loginSlice,
        get      :  getSlice,
        update   :  updateSlice
    }
})