import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { delete_data, form_data, updt_data } from '../../features/slice/formSlice';
import Header from '../layouts/Header'
export default function Form() {

    const [data,setData] = useState([])
    const [updt,setUpdt] = useState({
        name:'',
        sname:''
    })
    const [del,setDel] = useState({
        name:'',
        sname:''
    })

    const dispatch = useDispatch();

    const state = useSelector(state=>state)
    console.log(state.form)

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
        setData({
            ...data,
            name:'',
            sname:''
        })
        // console.log(data)
    }

    const deleteBtn = (e,idx) => {
        e.preventDefault();
           
        let d = state.form.deleteData
        console.log(d.idx)
      let value = d.filter((c,i,a)=>{
           return (
           a.indexOf(c) == idx
           )
       });
       console.log(value) 
       setDel({
           name:value.name,
           sname:value.sname
       })
        // dispatch(delete_data(del))    
     
    }

    // const deleteBtn = (e,idx) => {
    //     // e.preventDefault();
    //     console.log('ok')
    //     let id = e.target.value
    //     console.log('------id',id)
    //     console.log('idx======',idx)
    //     // let del = e.target.closest('tr')
    //     // del.remove(state.form)
    //     // data.filter((_, i) => id !== idx);

    //     let myNewData = state.form.filter((_,cv)=> {
    //         console.log(cv)
    //         if(cv.id !== idx){
    //             console.log(_)
    //             console.log("ok");
    //         }else{
    //             console.log('not ok')
    //         }
    //     })
    //     console.log(myNewData)
        
    // }
    

    const editBtn = (e,idx) => {
        console.log(state.form[idx])
        let d = state.form.formData
      let value = d.filter((c,i,a)=>{
           return (
           a.indexOf(c) == idx
           )
       });
       let name = value[0].name
       let sname = value[0].sname
       console.log(value[0]) 
       setUpdt({
           ...updt,
           name:name,
           sname:sname
       })   
       console.log(updt)  
    }

    const updateValue = (e) => {
        const {name , value} = e.target
        setUpdt({
            ...updt,
            [name]:value
        })
        console.log(updt)
    }

    const updtBtn = (e) => {
        e.preventDefault();
        dispatch(updt_data(updt))
        setUpdt ({
            ...updt,
            name:'',
            sname:''
        })
    }

  return (
    <>
        <Header />

        {
        //   updt.length > 0 && 
          <div className='mx-auto w-25 mt-5 border mb-5'>
          <form className='p-5'>
              <h3 className='text-center mb-4'>Update Form Data</h3>
              {/* <input type='number' className='form-control id' name="id" value={data?.id ?? ''}  onChange={changeValue} placeholder='Enter Id' /><br />  */}
              <input type='text' className="form-control name" name='name' value={updt?.name ?? ''} onChange={updateValue } placeholder='Enter Name'/><br />
              <input type='text' className="form-control sname" name='sname' value={updt?.sname ?? ''} onChange={updateValue} placeholder='Enter Surname' /><br />
              <button className='btn btn-success' onClick={updtBtn}>Submit</button>
            </form>
        </div> 
      }
        <h4 className='text-center mt-5'>Form Data</h4>
      
      <div className='container-fluid d-flex justify-content-center mt-5'>
        <table className=' container-fluid'>
            <thead>
                <tr className='row'>
                    <th className='col-3 text-center border p-1'>S.No.</th>
                    <th className='col-3 text-center border p-1'>Name</th>
                    <th className='col-3 text-center border p-1'>Surname</th>
                    <th className='col-3 text-center border p-1'>Action</th>
                </tr>
            </thead>
            <tbody>
                    {
                        state.form.formData.map((cv,idx,arr)=>{
                            // console.log(cv);
                            return (
                                <tr className='row' key={idx}>
                                    <td className='col-3 text-center border p-2' >{idx+1}</td>
                                    <td className='col-3 text-center border p-2' >{cv.name}</td>
                                    <td className='col-3 text-center border p-2' >{cv.sname}</td>
                                    <td className='col-3 text-center border p-2'>
                                        <button className='btn btn-success' value={idx+1} onClick={(e)=>{editBtn(e,idx)}}>Edit</button>&nbsp;
                                        <button className='btn btn-danger' value={idx+1} onClick={(e)=>{deleteBtn(e,idx)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
            </tbody>
        </table>
      </div>
      <div className='mx-auto w-25 mt-5 border mb-5'>
          <form className='p-5'>
              <h3 className='text-center mb-4'>Form Data</h3>
              {/* <input type='number' className='form-control id' name="id" value={data?.id ?? ''}  onChange={changeValue} placeholder='Enter Id' /><br />  */}
              <input type='text' className="form-control name" name='name' value={data?.name ?? ''} onChange={changeValue} placeholder='Enter Name'/><br />
              <input type='text' className="form-control sname" name='sname' value={data?.sname ?? ''} onChange={changeValue} placeholder='Enter Surname' /><br />
              <button className='btn btn-success' onClick={submitBtn}>Submit</button>
          </form>
      </div>
      
    </>
  );
}
