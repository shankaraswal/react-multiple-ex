import React from 'react'

function Navbar (){
  
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#">Toast</a>
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
