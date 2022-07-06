import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/slice/incDecSlice';
import Header from './layouts/Header';

export default function Inc_Dec() {

    const dispatch = useDispatch();
    const state = useSelector(state=>state);
    
  return (
    <>
        <Header />
        <div className='text-center border p-5 offset-4 w-25 mt-5'>
            <h1>{state.inc_dec.value}</h1><br /><br />
            <button className='btn btn-success' onClick={()=>{dispatch(increment())}}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button className='btn btn-success'onClick={()=>{dispatch(decrement())}}>Decrement</button>
        </div>
    </>
  );
}
