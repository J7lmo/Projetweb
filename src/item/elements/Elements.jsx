import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import slide1 from '../../img/slider-badag.jpg';
import slide2 from '../../img/slider-badging.jpg';
import slide3 from '../../img/slider-scale.jpg';
import slide4 from '../../img/slider-scales.jpg';
import logog1 from '../../img/viewers-disney.png';
import logog2 from '../../img/viewers-marvel.png';
import logog3 from '../../img/viewers-national.png';
import logog4 from '../../img/viewers-pixar.png';
import logog5 from '../../img/viewers-starwars.png';
import aff1 from '../../img/insout.jpeg';
import aff2 from '../../img/avend.jpeg';
import aff3 from '../../img/avalonia.jpeg';
import aff5 from '../../img/Loki.jpeg';
import aff4 from '../../img/soul.webp';
import vid1 from '../../videos/1564674844-disney.mp4';
import vid2 from '../../videos/1564676115-marvel.mp4';
import vid3 from '../../videos/1564676296-national-geographic.mp4';
import vid4 from '../../videos/1564676714-pixar.mp4';
import vid5 from '../../videos/1608229455-star-wars.mp4';
import './Elements.css';
const Elements = () => {
  return (
    <div className='movdet'>
      <Carousel indicators>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide4}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="mrg">
        <div className="row">
          <div className="col-lg">
            <div className="card-body">
            <div className="video-overlay"></div>
            <img className="coverimg" src={logog1} alt="Disney Logo" />
                <video autoPlay muted loop>
                  <source src={vid1} type="video/mp4" />
                </video>
            </div>
          </div>
          <div className="col-lg">
            <div className="card-body">
            <div className="video-overlay"></div>
            <img className="coverimg" src={logog2} alt="Disney Logo" />
                <video autoPlay muted loop>
                  <source src={vid2} type="video/mp4" />
                </video>
            </div>
          </div>
          <div className="col-lg">
            <div className="card-body">
            <img className="coverimg" src={logog3} alt="Disney Logo" />
                <video autoPlay muted loop>
                  <source src={vid3} type="video/mp4" />
                </video>
            </div>
          </div>
          <div className="col-lg">
            <div className="card-body">
            <img className="coverimg" src={logog4} alt="Disney Logo" />
                <video autoPlay muted loop>
                  <source src={vid4} type="video/mp4" />
                </video>
            </div>
          </div>
          <div className="col-lg">
            <div className="card-body">
            <img className="coverimg" src={logog5} alt="Disney Logo" />
                <video autoPlay muted loop>
                  <source src={vid5} type="video/mp4" />
                </video>
            </div>
          </div>
          <p className='txt'>Recommended for You</p>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <Link to="/inside-out">
            <img className="coverimg" src={aff1} alt="Disney Logo" />
            </Link>
            </div>
          </div>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff2} alt="Disney Logo" />
            </div>
          </div>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff3} alt="Disney Logo" />
            </div>
          </div>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff4} alt="Disney Logo" />
            </div>
          </div>
          <p className='txt'>New to Disney+</p>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff3} alt="Disney Logo" />
            </div>
          </div>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff1} alt="Disney Logo" />
            </div>
          </div>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff4} alt="Disney Logo" />
            </div>
          </div>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff5} alt="Disney Logo" />
            </div>
          </div>
          <p className='txt'>Originals</p>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff2} alt="Disney Logo" />
            </div>
          </div>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff3} alt="Disney Logo" />
            </div>
          </div>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff5} alt="Disney Logo" />
            </div>
          </div>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff1} alt="Disney Logo" />
            </div>
          </div>
          <p className='txt'>Trending</p>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff3} alt="Disney Logo" />
            </div>
          </div>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff2} alt="Disney Logo" />
            </div>
          </div>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff4} alt="Disney Logo" />
            </div>
          </div>
          <div className="col-lg col-sm-6">
            <div className="card-body">
            <img className="coverimg" src={aff5} alt="Disney Logo" />
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};
export default Elements;