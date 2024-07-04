import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
export default function Navbar() {
  return (
    <>
    <div className='container'>
    <img className="logo"  src={logo} alt='image not found'/> 
    <ul>
        <li>Home</li>
        <li>program</li>
        <li>about us</li>
        <li>campus</li>
        <li><button>contact us</button ></li>


    </ul>
    </div>
    </>
  )
}

