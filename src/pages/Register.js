import React from 'react';
import { useDispatch } from 'react-redux';
import { registerApi } from '../features/apiCall/registerApi';
import Header from './layouts/Header';

export default function Register() {

    const dispatch = useDispatch();
    
    const handleRegister = () => {
        console.log('register')
    }

    const handleRegisterImg = () => {
        console.log('handleRegisterImg')
    }

    const RegisterForm = (e) => {
        e.preventDefault()
        dispatch(registerApi())

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
