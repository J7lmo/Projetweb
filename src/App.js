import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { Routes,Route } from 'react-router-dom';
import { Navlog,Navbar,Homepage,Home,Elements,Moviedetail,Login} from './item'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route exact path="/home" element={<Homepage/>}/>
        <Route exact path="/inside-out" element={<Moviedetail/>}/>
      </Routes>
    </div>
  )
}

export default App