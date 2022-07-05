import React from 'react';
import Header from './layouts/Header';

export default function Update() {
  return (
    <>
      <Header />
      <form className='offset-4 border w-25 p-4 mt-5'>
          <h4 className='text-center'>Update Image</h4>
          <div className='text-center'>
            <input type='email' placeholder='email' className='fs-5' /><br /><br />
          </div>
          <div className='text-center fs-5 ps-5'>
            <input type='file' className='ps-5 ' />
          </div>
      </form>
    </>
  );
}
