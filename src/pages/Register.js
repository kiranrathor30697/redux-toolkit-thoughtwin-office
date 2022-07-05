import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerApi } from '../features/apiCall/registerApi';
import Header from './layouts/Header';

export default function Register() {
    
   const [state, setstate] = useState({
    userName:'',
    email:'',
    profilePic:'',
    password:'',
    confirmPassword:''
   });

    const dispatch = useDispatch();
    
    const handleRegister = (e) => {
        // console.log('register')
        const  {name,value} = e.target
        // console.log(name,value);
        setstate({
            ...state,
            [name]:value
        })
        console.log(state)
    }

    const handleRegisterImg = (e) => {
        // console.log('handleRegisterImg')
        console.log(e.target.files[0]);
        setstate({
            ...state,
            profilePic:e.target.files[0]
        })
    }

    const RegisterForm = (e) => {
        e.preventDefault()
        dispatch(registerApi(state))

    }
    return (
        <>
            <Header />
            <div className='mt-5'>
            <form className='w-25 offset-4 border p-5'>
                <h3 className='App mb-4'> Register Form</h3>
                <input type="text" className='form-control mb-4 text-center' onChange={(e)=>{handleRegister(e)}} name="userName" placeholder='Enter UserName' />
                <input type="email" className='form-control text-center mb-4' onChange={(e)=>{handleRegister(e)}} name="email" placeholder='Enter Email' />
                <input type="file" accept="image/*" id='profilePic' className='form-control mb-4' onChange={(e)=>{handleRegisterImg(e)}} name="profilePic" placeholder='Select Profile' />
                <input type="password" className='form-control text-center mb-4' onChange={(e)=>{handleRegister(e)}} name="password" placeholder='Enter Password' />
                <input type="password" className='form-control text-center mb-4' onChange={(e)=>{handleRegister(e)}} name="confirmPassword" placeholder='Enter Confirm Password' />
                <div className='App mt-4'>
                <button type="submit" className='btn btn-success' onClick={(e)=>{RegisterForm(e)}}>User Register</button>
                </div>
            </form>
            </div>
        </>
    );;
}
