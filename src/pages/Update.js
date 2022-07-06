import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateApi } from '../features/slice/updateSlice';
import Header from './layouts/Header';
import update from './update.css'

export default function Update() {
  let userData = JSON.parse(localStorage.getItem('rtk_userData'))

  let token = JSON.parse(localStorage.getItem('rtk_token'))

  const dispatch = useDispatch();

  const [updt,setUpdt] = useState({
    email: userData.email,
    profilePic:userData.profilePic
  })
  
  const handleChange = (e) => {
    // console.log(e)
    setUpdt({
      ...updt,
      email:e.target.value,
    })
  }
  const img_Change = (e) => {
    setUpdt({
      ...updt,
      profilePic:e.target.files[0]
    })
  }
  const updt_img = (e) => {
    e.preventDefault()
    // let formData = new FormData();
    // formData.append('email',updt.email);
    // formData.append('profilePic',updt.profilePic)
    const data = {
      token,
      updt
    }
    // console.log(data)
    dispatch(updateApi(data));
  }

  return (
    <>
      <Header />
      <form className='offset-4 border w-25 p-4 mt-5'>
          <h4 className='text-center'>Update Image</h4>
          <div className='text-center mt-5'>
            <input type='email' placeholder='email' className='fs-5 text-center form-control' onChange={(e)=>{handleChange(e)}} value={updt.email} /><br /><br />
          </div>
          <div className='text-center img_box'>
            <img src={userData.profilePic} className='' />
          </div>
          <div className='text-center fs-5 ps-5 mt-5 '>
            <label htmlFor='img' className='my_img'>
              <input type='file' id='img' hidden className='ps-5 form-control' onChange={(e)=>{img_Change(e)}}/>
            </label>
          </div>
          <div className='text-center'>
            <button className='btn btn-success' onClick={(e)=>{updt_img(e)}}>Update Image</button>
          </div>
      </form>
    </>
  );
}
