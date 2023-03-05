import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Navbar,Elements} from '../'
const Header = () => {
  return (
    <div className='Header'>
      <Navbar/>
    <Elements/>
    </div>
  )
}

export default Header