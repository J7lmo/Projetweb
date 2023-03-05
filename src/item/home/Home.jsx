import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img1 from '../../img/cta-logo-one1.png';
import img2 from '../../img/cta-logo-two.png';

const Home = () => {
  return (
    <div class="bg">
    <div class="d-flex align-items-center justify-content-center w-100 vh-100">
    <div class="text-center">
    <img src={img1} class="mx-auto my-auto img-fluid img1" alt="Votre image" /><br/>
    <button class="btn1">GET ALL THERE</button>
    <p class="description">  Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</p>
            <img src={img2} class="mx-auto my-auto img-fluid img1" alt="Votre image" /><br/>
    </div>
  </div>
  </div>
  )
}

export default Home