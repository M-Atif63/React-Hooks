import React, { useContext } from 'react'
import { ProjectTheme } from './ChangTheme'

function ReactForms() {
  const {theme} = useContext(ProjectTheme)
  return (
    <div style={{background:theme==='light'?'white':'#222',color:theme==='light'?'black':'white',height:'100vh'}}>
      
      
      
      
      <h1 style={{padding:'20px',margin:'0px'}}>Feedback</h1>
    </div>
  )
}

export default ReactForms
