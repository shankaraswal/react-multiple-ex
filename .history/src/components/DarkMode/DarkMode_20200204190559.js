import React, { useState, useEffect} from 'react'
import './DarkMode.css'

function DarkMode() {
  const [dark, setDark] = useState(false);
  setDark = (dark) => { 
    return !dark
  }
  return (
    <div className="dark-mode">
      <label className="switch">
        <input type="checkbox" onChange={setDark(!dark)} />
      <span className="slider round"></span>
    </label>
    </div>
  )
}
export default DarkMode;