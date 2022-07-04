import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/slice/registerSlice';

export const store = configureStore({
    reducer:{
        counter: counterReducer,
    }
})