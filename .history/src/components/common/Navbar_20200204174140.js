import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar (){
  
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <NavLink className="nav-link" href="#" />
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    )
  
}

export default Navbar
