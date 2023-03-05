import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import {Navlog,Home } from './'

const Login = () => {
  return (
    <div className='Login'>
      <Navlog/>
      <Home/>
    </div>
  )
}
export default Login