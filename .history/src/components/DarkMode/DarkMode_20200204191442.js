import React, { useState, useEffect} from 'react'
import './DarkMode.css'
import CopyArea from '../common/CopyArea'

function DarkMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(dark))
  }, [dark]);
  const getMode = () => { 

  }
  
  return (
    <div className={dark? "dark-mode on": "dark-mode off"}>
      <label className="switch">
        <input type="checkbox" onChange={()=>(setDark(!dark))} />
      <span className="slider round"></span>
      </label>
      <CopyArea />
    </div>
  )
}
export default DarkMode;