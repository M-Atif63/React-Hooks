import React, { useContext, useState } from 'react'
import Btns from '../Btns/Btns.jsx'
import H3 from '../Headings/H2.jsx'
import H2 from '../Headings/H2.jsx'
import { themeContext } from '../Pages/ChangTheme.jsx'

function CounterPractice() {
    const { theme, toggleTheme } = useContext(themeContext)
    const [proCount, setproCount] = useState(0)
    return (
        <div style={{
            background: theme === 'light' ? 'white' : 'black',
            color: theme === 'light' ? 'black' : 'white',
        }}>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '25px',
                width: '100%',
                fontSize: '20px',
                height: '100vh'
            }}>
                {/* <button onClick={()=>toggleTheme()}>change Theme</button> */}
                <select onChange={(e)=>toggleTheme(e.target.value)}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    </select>
                <Btns className="dec-btn" id="decBtn" onClick={() => setproCount(proCount - 1)} btnValue="-" />
                <H2 btnValue={proCount} />
                <Btns className="inc-btn" id="incBtn" onClick={() => setproCount(proCount + 1)} btnValue="+" />
            </div>
        </div>

    )
}

export default CounterPractice