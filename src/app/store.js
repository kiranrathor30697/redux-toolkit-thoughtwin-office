import { configureStore } from "@reduxjs/toolkit";
import registerSlice from '../features/slice/registerSlice';

export const store = configureStore({
    reducer:{
        register: registerSlice,
    }
})