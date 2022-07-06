import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  return (
    <>
    {
      localStorage.removeItem('rtk_token')
    }{
      localStorage.removeItem('rtk_userData')
    }{
      navigate('/login')
    }
    </>
  );
}
export default Logout