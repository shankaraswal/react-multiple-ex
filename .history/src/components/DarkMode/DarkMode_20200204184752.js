import React from 'react'
import './DarkMode.css'

export default function DarkMode() {
  return (
    <div>
      <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
    </div>
  )
}
