import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar (){
  
  return (
    <nav className="navbar">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">Toastify</NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/modal">Modal</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/crop">Crop</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/dark">Dark Mode</Link>
        </li>
    </ul>
    </nav>
    )
  
}

export default Navbar
