import React, { useState, userEffect} from 'react'
import './DarkMode.css'

function DarkMode() {
  return (
    <div className="dark-mode">
      <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
    </div>
  )
}
export default DarkMode;