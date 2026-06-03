import React, { useContext, useEffect, useRef, useState } from 'react'
import { ProjectTheme } from './ChangTheme'

function Features() {
  const [inputValue,setInputValue] = useState('')
  const { theme } = useContext(ProjectTheme)
  const count = useRef(0)
  useEffect(()=>{
   count.current = count.current + 1; 
  },[inputValue])
  return (
    <div style={{ background: theme === 'light' ? 'white' : '#222', color: theme === 'light' ? 'black' : 'white', height: '100vh' }}>
      <h1 style={{ padding: '20px', margin: '0px' }}>Features</h1>
      {/* --useRef--  */}
    <p>Type in the input field:</p>
    <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} style={{border:"2px solid black"}}></input>
    <h1>Render Count : {count.current}</h1>
    </div>





  )
}

export default Features
