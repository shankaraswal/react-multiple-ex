import React from 'react'
import './DarkMode.css'

function DarkMode() {
  return (
    <div>
      <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
    </div>
  )
}
export default DarkMode;