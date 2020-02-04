import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar (){
  
  return (
    <nav className="navbar navbar-right">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Toastify</NavLink>
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
