import React, { useContext, useEffect, useRef, useState } from 'react'
import { ProjectTheme } from './ChangTheme'

function Docs() {
    const {theme} = useContext(ProjectTheme)
    const [inputValue,setInputValue] = useState('')
    const previousValue = useRef()
    useEffect(()=>{
      previousValue.current.value = inputValue
    },[inputValue])
  return (
    <div style={{background:theme==='light'?'white':'#222',color:theme==='light'?'black':'white',height:'100vh'}}>
      <h1 style={{padding:'20px',margin:'0px'}}>Docs</h1>
    <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
    <h1>Current Value : {inputValue}</h1>
    <h1>Previous Value : {previousValue.current.value}</h1>
    </div>

  )
}

export default Docs
