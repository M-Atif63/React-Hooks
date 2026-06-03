import React, { useContext, useEffect, useRef, useState } from 'react'
import { ProjectTheme } from './ChangTheme'

function Features() {
  // const [inputValue,setInputValue] = useState('')
  const { theme } = useContext(ProjectTheme)
  // const count = useRef(0)
  // useEffect(()=>{
  //  count.current = count.current + 1; 
  // },[inputValue])
  return (
    <div style={{ background: theme === 'light' ? 'white' : '#222', color: theme === 'light' ? 'black' : 'white', height: '100vh' }}>
      <h1 style={{ padding: '20px', margin: '0px' }}>Features</h1>
      {/* --useRef--  */}
      {/* <center>
    <h3>Type in the input field:</h3>
    <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} style={{border:theme==='light'?"1px solid black":"1px solid white",backgroundColor:theme==="light"?'white':'#222',width:'500px',height:'30px',borderRadius:'5px',textAlign:'center',fontSize:'25px',outline:'none',color:theme==='light'?'black':'white'}}></input>
    <h1>Render Count : {count.current}</h1>
    </center> */}
    </div>





  )
}

export default Features
