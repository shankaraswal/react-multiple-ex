import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar (){
  
  return (
    <nav className="navbar navbar-right">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <NavLink className="nav-link" path="/">Toastify</NavLink>
        </li>
        
    </ul>
    </nav>
    )
  
}

export default Navbar
