import React, { useContext } from 'react'
import { ProjectTheme } from './ChangTheme'

function Home() {
  const {theme} = useContext(ProjectTheme)
  return (
    <div style={{background:theme==='light'?'white':'#222',color:theme==='light'?'black':'white',height:'100vh'}}>
      <h1 style={{padding:'20px',margin:'0px'}}>Home</h1>
    </div>
  )
}

export default Home
