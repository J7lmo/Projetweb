import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { Link } from 'react-router-dom';
import './moviedetail.css'
import logo from '../../img/logo_insideout.png';
import {Navbar,Elements} from '../'
const Moviedetail = () => {
  return (
    <div className='bgd'>
      <Navbar/>
      <div className="row">
          <div className="col">
            <img className="logoimg" src={logo} alt="Disney Logo" />
            </div>
          <div className="col">
       
            </div>
          <div className="col c13">
          
            </div>
        </div>
        <div className="row">
          <div className="col-md-8 ">
          <button class="botn"><i class="fa-solid fa-play"></i>PLAY</button>
          <Link to="https://www.youtube.com/watch?v=J4_8jijwNs0" target="_blank">
          <button class="botn1"><i class="fa-solid fa-play"></i>TRAILER</button>
          </Link>
          <button class="btn-round"><i class="fa-solid fa-plus add"></i></button>
          <button class="btn-ronud"><i class="fa-solid fa-user-group add"></i></button><br/>
          <p>2015•1h 35•Family,Comedy,Fantasy,Animation,Music</p>
          <p>Growing up can be a bumpy road, and it’s no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Riley’s guiding emotions— Joy, Fear, Anger, Disgust and Sadness—live in Headquarters, the control centre inside Riley’s mind, where they help advise her through everyday life and tries to keep things positive, but the emotions conflict on how best to navigate a new city, house and school.</p>
        </div>
        </div>
    </div>

  )
}

export default Moviedetail