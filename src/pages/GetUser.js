import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getApi } from '../features/slice/getSlice';
import Header from './layouts/Header';

export default function GetUser() {

  const dispatch = useDispatch();
  const [data,setData] = useState({})
  const state = useSelector(state=>state)
  const navigate = useNavigate()
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('rtk_token'));
     dispatch(getApi(token))
  }, [])

  const change_Img = () => {
    navigate('/update')
  }
  return (  
    <>      
      <Header />
      <table className='mt-5 container-fluid'>
        <thead>
          <tr className="fs-4 border ps-5 pe-5 ">
            <th className='ps-5 border ps-5 pe-5 d-flex justify-content-center'>User Name</th>
            <th className='ps-5 border ps-5 pe-5 text-center'>Email</th>
            <th className='ps-5 border ps-5 pe-5 text-center'>ProfilePic</th>
            <th className='ps-5 border ps-5 pe-5 text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
        {state.get.data.map((cv,idx,arr)=>{
          const token = JSON.parse(localStorage.getItem('rtk_token'))
          const userData = JSON.parse(localStorage.getItem('rtk_userData'))
          console.log(token)
            return(
              <tr key={idx} className="ps-3 border text-center fs-4">
                <td className="p-3 border ps-5 pe-5 text-center">{cv.userName}</td>
                <td className="p-3 border ps-5 pe-5 text-center">{cv.email}</td>
                <td className="p-3 border text-center p-5">
                  {<img 
                    src={cv.profilePic}
                    alt="Image not Found"
                    height={400}
                    width={400}
                  />}
                </td>
                <td>
                  {(userData.userName == cv.userName)?<button className='btn btn-success btn-lg' onClick={(e)=>{change_Img(e)}} >Edit Data</button>:null}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>  
    </>
  );
}
