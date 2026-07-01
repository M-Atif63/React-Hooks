// import React, { useContext, useEffect, useRef, useState } from 'react'
// import { ProjectTheme } from './ChangTheme'

// function AboutUseRef() {
//     const { theme } = useContext(ProjectTheme);
//     const [input,setInput] = useState('')
//     const count = useRef(0)
//     useEffect(()=>{
//         count = count + 1
//     })
//     return (
//         <div>
//             <div style={{ paddingLeft: '30px', background: theme === 'light' ? 'white' : '#222', color: theme === 'light' ? 'black' : 'white', height: '100%' }}>
//             <h1>useRef</h1>
//             <input type="text" onChange={(e)=>setInput(e.target.value)} placeholder='Type your Message'/>
//             <h1>Count : {count}</h1>
//             </div>
//         </div>
//     )
// }

// export default AboutUseRef



import React, { useContext, useRef, useState, useEffect } from 'react'
import { ProjectTheme } from './ChangTheme'

const AboutUseRef = () => {
    const { theme } = useContext(ProjectTheme)
    return (
        <div>
            <div style={{ background: theme === 'light' ? 'white' : '#222', color: theme === 'light' ? 'black' : 'white', height: '100vh' }}>
            </div>
        </div>
    )
}

export default AboutUseRef
