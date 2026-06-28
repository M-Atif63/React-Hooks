import React, { useContext, useState } from 'react'
import { ProjectTheme } from './ChangTheme'

function AboutUseEffect() {
    const {theme} = useContext(ProjectTheme)
    const [hours,setHours] = useState(0) 
    return (
        <div>
            <div style={{ paddingLeft:'30px',background: theme === 'light' ? 'white' : '#222', color: theme === 'light' ? 'black' : 'white', height: '100vh' }}>
                <div>
                <h1 style={{ padding: '20px', margin: '0px' }}>About UseEffect</h1>
                <h2>Q : What is useEffect?</h2>
                <h2>Ans : useEffect is a Powerful hook</h2><hr />
                <h2>Q : Where is used useEffect hook?</h2>
                <h2>Ans : useEffect hook is used for perform any side effect in our component.</h2>
                <hr />
                <h1>Important Points:</h1>
                    <h2>useEffect hook accept two arguments</h2>
                    <h2>⭐First Function</h2>
                    <h2>⭐Second Dependency </h2>
                    <h2>Note : the Second argument is optional</h2>
                    </div>
            </div>


        </div>
    )
}

export default AboutUseEffect
