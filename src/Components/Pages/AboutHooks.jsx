// import React, { useContext } from 'react'
// import { ProjectTheme } from './ChangTheme'

// function AboutHooks() {
//   const { theme } = useContext(ProjectTheme)
//   return (
//     <div style={{ backgroundColor: theme === 'light' ? 'white' : '#222', color: theme === 'light' ? 'black' : 'white', height: '100vh' }}>
//       <h1 style={{ padding: '20px', margin: '0px' }}>About Hooks</h1>
//     </div>
//   )
// }

// export default AboutHooks

import React, { useContext } from 'react'
import { ProjectTheme } from './ChangTheme'

function AboutHooks() {
  const { theme } = useContext(ProjectTheme)
  return (
    <div style={{
      background: theme === 'light' ? 'white' : '#222',
      color: theme === 'light' ? 'black' : 'white',
      width:'100%',
      height:'100vh',
      padding:'0px',
      margin:'0px',
      textAlign:'center',
      paddingTop:'40px'
    }}>
      <div>
        <h3 style={{ fontSize: '30px',margin:'0px' }}>Q1: <span>Hooks kise kahte hain?</span></h3>
        <h3 style={{ fontSize: '25px' }}>Ans: <span>Hooks classes components ko use kiye bina he functional components me apko <br /> react ki powers like [state,lifecycle,effect etc] ko
          access karne ki permission deta hai</span></h3>
        <h3 style={{ fontSize: '25px' }}><h2>Easy Wording</h2>Agar asaan alfaaz me samjha jaye to, Hooks un Power full functions ko kehte hain<br />
          jo aap ko is baat ki ijazat dete hain ke aap react ki power like [state,lifecycle,effect<br /> etc] ko kisi bhi functional components me use kar sakte hain without use class</h3>
      </div>
     </div>
  )
}

export default AboutHooks
