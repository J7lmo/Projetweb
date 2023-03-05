import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logodisney from '../../img/logo.svg';
import { Link } from 'react-router-dom';
import './Navlog.css'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useGoogleLogin } from '../../firebase';


const Navlog = () => {
  const { signInWithGoogle } = useGoogleLogin(); 
  return (
      <nav class="navbar fixed-top navbar-custom">
        <div class="container">
          <ul class="navbar-nav me-auto">
            <Link to="/">
              <img src={logodisney} class=" my-auto img-fluid logdis" alt="Votre image" />
            </Link>
          </ul>
            <button class="btn btnlog" onClick={signInWithGoogle}>LOGIN</button>
        </div>
      </nav>   
  )
}

export default Navlog