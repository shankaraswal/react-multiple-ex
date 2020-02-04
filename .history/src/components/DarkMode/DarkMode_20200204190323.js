import React, { useState, useEffect} from 'react'
import './DarkMode.css'

function DarkMode() {
  const [dark, setDark] =useState()
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