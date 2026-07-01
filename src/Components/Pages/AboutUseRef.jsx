import React, { useContext } from 'react'
import { ProjectTheme } from './ChangTheme'

function AboutUseRef() {
    const { theme } = useContext(ProjectTheme);
    const 
    return (
        <div>
            <div style={{ paddingLeft: '30px', background: theme === 'light' ? 'white' : '#222', color: theme === 'light' ? 'black' : 'white', height: '100%' }}>
            <h1>useRef</h1>

            </div>
        </div>
    )
}

export default AboutUseRef
