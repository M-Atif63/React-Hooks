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

import React from 'react'

function AboutHooks() {
  return (
    <div>

      --<p>Q1:</p>
      <p>Hooks kise kahte hain?</p>
      <hr />
      <p>Ans:</p>
      <p>Hooks classes components ko use kiye bina he functional components me apko react ki powers like [state,lifecycle,effect etc] ko 
        access karne ki permission deta hai</p>
        <br />
      <p>agar asaan alfaaz me samjha jaye to, Hooks un Power full functions ko kehte hain jo aap ko is baat ki ijazat dete hain ke aap 
        react ki power like [state,lifecycle,effect etc] ko kisi bhi functional components me use kar sakte hain without use class</p>
    </div>
  )
}

export default AboutHooks
