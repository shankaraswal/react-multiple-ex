import React, { useState, useEffect} from 'react'
import './DarkMode.css'
import CopyArea from '../common/CopyArea'

function DarkMode() {
  const getMode = () => { 
    return JSON.parse(localStorage.getItem('mode')) || false;
  }
  const [dark, setDark] = useState(getMode());
  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(dark))
  }, [dark]);

  
  return (
    <div className={dark? "dark-mode on": "dark-mode off"}>
      <label className="switch">
        <input
          type="checkbox"
          checked={dark}
          onChange={() => (setDark(!dark))} />
      <span className="slider round"></span>
      </label>
      <CopyArea />
    </div>
  )
}
export default DarkMode;