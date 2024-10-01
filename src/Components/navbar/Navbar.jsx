import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
      <div className="log">
      </div>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Register</a></li>
      </ul>
    </div>
  )
}

export default Navbar
