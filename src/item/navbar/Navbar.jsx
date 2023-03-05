import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logodisney from '../../img/logo.svg';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md fixed-top navbar-custom">
      <div class="container">
      <ul class="navbar-nav">
      <Link to="/">
      <img src={logodisney} class=" my-auto img-fluid logdis" alt="Votre image" />
      </Link>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <li class="nav-item px-2">
            <Link to="/home">
              <a class="nav-link" href="#"><i class="fa fa-home"></i>HOME</a>
            </Link>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#Mescompetences"><i class="fa-solid fa-magnifying-glass"></i>SEARCH</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#Monparcours"><i class="fa-solid fa-plus"></i>WATCHLIST</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#Stages"><i class="fa-solid fa-star"></i>ORIGINALS</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#Stages"><i class="fa-solid fa-video"></i>MOVIES</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#Stages"><i class="fa-solid fa-tv"></i>SERIES</a>
            </li>
      </div>
      </ul>
      <img class="pp" src={localStorage.getItem("profilePic")} />
      </div>
    </nav>
  )
}

export default Navbar