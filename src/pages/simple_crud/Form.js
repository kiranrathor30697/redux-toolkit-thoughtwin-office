import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { form_data } from '../../features/slice/formSlice';
import Header from '../layouts/Header'
export default function Form() {

    const [data,setData] = useState([])

    const dispatch = useDispatch();

    const state = useSelector(state=>state)
    // console.log(state.form)

    const navigate = useNavigate()

    const changeValue = (e) => {
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
        // console.log(data)
    }
    const submitBtn = (e) => {
        e.preventDefault();
        dispatch(form_data(data))
        localStorage.setItem('data',JSON.stringify(state.form))
        
    }

    const editBtn = (e) => {
        e.preventDefault();
        navigate('/edit_form_data')
        let edit = e.target.closest('tr')   
        console.log(edit)
        let mydata = JSON.parse(localStorage.getItem('data'))
        setData({
            ...data,
            name:state.form.name,
            sname:''
        })
    }

    const deleteBtn = (e) => {
        e.preventDefault();
        let del = e.target.closest('tr')
        del.remove('td')
    }
  return (
    <>
        <Header />
      <div className='mx-auto w-25 mt-5 border mb-5'>
          <form className='p-5'>
              <h3 className='text-center mb-4'>Form Data</h3>
              <input type='text' className="name" name='name' value={data.name ?? ''} onChange={changeValue} className='form-control' placeholder='Enter Name'/><br />
              <input type='text' className="sname" name='sname' value={data.sname ?? ''} onChange={changeValue} className='form-control' placeholder='Enter Surname' /><br />
              <button className='btn btn-success' onClick={submitBtn}>Submit</button>
          </form>
      </div>
      <div className='container-fluid d-flex justify-content-center'>
        <table className=' container-fluid'>
            <thead>
                <tr className='row'>
                    <th className='col-3 text-center border'>S.No.</th>
                    <th className='col-3 text-center border'>Name</th>
                    <th className='col-3 text-center border'>Surname</th>
                    <th className='col-3 text-center border'>Action</th>
                </tr>
            </thead>
            <tbody>
                    {
                        state.form.map((cv,idx,arr)=>{
                            // console.log(cv);
                            return (
                                <tr className='row' key={idx}>
                                    <td className='col-3 text-center border p-2' >{idx+1}</td>
                                    <td className='col-3 text-center border p-2' >{cv.name}</td>
                                    <td className='col-3 text-center border p-2' >{cv.sname}</td>
                                    <td className='col-3 text-center border p-2'>
                                        <button className='btn btn-success' value={idx+1} onClick={editBtn}>Edit</button>&nbsp;
                                        <button className='btn btn-danger' onClick={deleteBtn}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
            </tbody>
        </table>
      </div>
    </>
  );
}
