import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <Link className='navbar-link'to = "/" > Home</Link>
        <Link className='navbar-link' to = "/Housing" > Housing</Link>
        <Link className='navbar-link' to = "/Service" > Service</Link>
        <Link className='navbar-link' to = "/Contact" > Contact</Link>
        <Link className='navbar-link' to = "/Connexion" > Connexion</Link>
      </div>
      <div className='navbar-text'>
        <span className='navbar-title'>Arcadia</span>
       
      </div>
    </div>
   
  );
};