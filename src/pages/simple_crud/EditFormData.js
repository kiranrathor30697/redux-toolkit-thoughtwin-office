import React from 'react';

export default function EditFormData() {

    const changeValue = () => {
        
    }

    const submitBtn = () => {

    }
  return (
    <div className='mx-auto w-25 mt-5 border mb-5'>
          <form className='p-5'>
              <h3 className='text-center mb-4'>Edit Form Data</h3>
              <input type='text' className="name" name='name' value='' onChange={changeValue} className='form-control' placeholder='Enter Name'/><br />
              <input type='text' className="sname" name='sname' value='' onChange={changeValue} className='form-control' placeholder='Enter Surname' /><br />
              <button className='btn btn-success' onClick={submitBtn}>Submit</button>
          </form>
      </div>
  );
}
