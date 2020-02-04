import React, { useState, useEffect} from 'react'
import './DarkMode.css'
import CopyArea from '../common/CopyArea'

function DarkMode() {
  const [dark, setDark] = useState(false);
  
  return (
    <div className={dark? "dark-mode": ""}>
      <label className="switch">
        <input type="checkbox" onChange={()=>(setDark(!dark))} />
      <span className="slider round"></span>
      </label>
      <CopyArea />
    </div>
  )
}
export default DarkMode;