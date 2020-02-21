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
              <NavLink to="/hoca">Member A</NavLink>,
                <NavLink to="/hocb">Member B</NavLink>,
                <NavLink to="/hocc">Member C</NavLink>
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

        <div className="col-sm-3">
        <div className="card">
          <div className="card-header">Pure Component</div>
          <div className="card-body">
                <p><NavLink to="/purecomp">Pure Component Example</NavLink></p>
            </div>
            </div>
        </div>

        <div className="col-sm-3">
        <div className="card">
          <div className="card-header">getDerivedStateFromProps()</div>
          <div className="card-body">
                <p><NavLink to="/getderived">getDerivedStateFromProps()</NavLink></p>
            </div>
            </div>
        </div>

        <div className="col-sm-3">
        <div className="card">
          <div className="card-header">getSnapshotBeforeUpdate()</div>
          <div className="card-body">
                <p><NavLink to="/getsnap">getSnapshotBeforeUpdate()</NavLink></p>
            </div>
            </div>
        </div>

        <div className="col-sm-3">
        <div className="card">
          <div className="card-header">Portal Example</div>
          <div className="card-body">
                <p><NavLink to="/portals">React Portal</NavLink></p>
            </div>
            </div>
        </div>
      
        
        
        
      </div>
    )
  }
}

export default CompList
