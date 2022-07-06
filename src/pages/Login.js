import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../features/slice/loginSlice';
import Header from './layouts/Header';

export default function Login() {

  const [state,setState] = useState({
    userName:'',
    password:''
  })

  const navigate = useNavigate();

  const dispatch = useDispatch()

 const handleRegister = (e) => {
    // console.log('changed')
    const {name,value} = e.target
    setState({
      ...state,
      [name]:value
    })
    console.log(state)
  }

 const LoginForm = (e) => {
    e.preventDefault();
    dispatch(loginApi(state))
    navigate('/getuser')
  }

  return (
      <>
        <Header />
        <div className='mt-5'>
        <form className='w-25 offset-4 border p-5'>
            <h3 className='App mb-4'> Register Form</h3>
            <input type="text" className='form-control mb-4 text-center' onChange={(e)=>{handleRegister(e)}} name="userName" placeholder='Enter UserName' />
            <input type="password" className='form-control text-center mb-4' onChange={(e)=>{handleRegister(e)}} name="password" placeholder='Enter Password' />
            <div className='App mt-4 '>
              <button type="submit" className='btn btn-success' onClick={(e)=>{LoginForm(e)}}>User Register</button>
            </div>
        </form>
        </div>
    </>
  );
}













