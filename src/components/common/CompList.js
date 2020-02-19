import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './common.css'
export class CompList extends Component {
  render() {
    return (
      <div className="row compList">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-header">Higher Order Component</div>
            <div className="card-body">
              <ul className="text-left">
                <li><NavLink to="/hoca">Member A</NavLink></li>
                <li><NavLink to="/hocb">Member B</NavLink></li>
                <li><NavLink to="/hocc">Member C</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-sm-4">
          <ul className="text-left">
            <li><NavLink to="/Hoc1">Hoc1</NavLink></li>
            <li><NavLink to="/Hoc1">Hoc1</NavLink></li>
            <li><NavLink to="/Hoc1">Hoc1</NavLink></li>
            <li><NavLink to="/Hoc1">Hoc1</NavLink></li>
            <li><NavLink to="/Hoc1">Hoc1</NavLink></li>
            <li><NavLink to="/Hoc1">Hoc1</NavLink></li>
            <li><NavLink to="/Hoc1">Hoc1</NavLink></li>
          </ul>
        </div>
        <div className="col-sm-4">
          <ul className="text-left">
            <li><NavLink to="/Hoc1">Hoc1</NavLink></li>
            <li><NavLink to="/Hoc1">Hoc1</NavLink></li>
            <li><NavLink to="/Hoc1">Hoc1</NavLink></li>
            <li><NavLink to="/Hoc1">Hoc1</NavLink></li>
            <li><NavLink to="/Hoc1">Hoc1</NavLink></li>
            <li><NavLink to="/Hoc1">Hoc1</NavLink></li>
            <li><NavLink to="/Hoc1">Hoc1</NavLink></li>
          </ul>
        </div>
      
        
        
        
      </div>
    )
  }
}

export default CompList
