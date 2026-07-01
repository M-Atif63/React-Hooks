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

    const [hours,setHours] = useState(24);
    const [minutes,setMinutes] = useState(60);
    const [seconds,setSeconds] = useState(60);

    useEffect(()=>{
        setTimeout(()=>{
            setSeconds((seconds) => seconds - 1)
        },1000)
        if(seconds == 0){
            setMinutes((minutes) => minutes - 1)
            setSeconds(60)
        }
    })
    return (
        <div>
            <div style={{ background: theme === 'light' ? 'white' : '#222', color: theme === 'light' ? 'black' : 'white', height: '100vh' }}>
                <div style={{
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '50px'
                }}>
                    <h1 style={{
                        margin: '0px',
                    }}>{hours} : {minutes} : {seconds}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default AboutUseRef
