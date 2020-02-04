import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar (){
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/" />
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/modal" />
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/crop" />
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/dark" />
        </li>
    </ul>
    </div>
    )
  
}

export default Navbar
