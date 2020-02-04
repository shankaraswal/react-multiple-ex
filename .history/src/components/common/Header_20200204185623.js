
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <header>
  <div className="collapse bg-dark" id="navbarHeader">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <h4 className="text-white">About</h4>
          <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div className="col-sm-4 offset-md-1 py-4">
          <h4 className="text-white">Contact</h4>
          <ul className="list-unstyled">
            <li><NavLink className="text-white">Follow on Twitter</NavLink></li>
            <li><NavLink className="text-white">Like on Facebook</NavLink></li>
            <li><NavLink className="text-white">Email me</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</header>
    )
  }
}

export default Header
