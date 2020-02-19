import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './common.css'
export class CompList extends Component {
  render() {
    return (
      <div className="row compList">
        <div className="col-sm-3">
          <div className="card">
            <div className="card-header">Higher Order Component</div>
            <div className="card-body">
                <p><NavLink to="/hoca">Member A</NavLink></p>
                <p><NavLink to="/hocb">Member B</NavLink></p>
                <p><NavLink to="/hocc">Member C</NavLink></p>
            </div>
            </div>
        </div>
        
        <div className="col-sm-3">
        <div className="card">
          <div className="card-header">Use of Ref</div>
          <div className="card-body">
                <p><NavLink to="/ref">Ref Example</NavLink></p>
            </div>
            </div>
        </div>
      
        
        
        
      </div>
    )
  }
}

export default CompList
