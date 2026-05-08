import React, { useState } from 'react'
import Btns from '../Btns/Btns.jsx'
import H3 from '../Headings/H2.jsx'
import H2 from '../Headings/H2.jsx'

function CounterPractice() {
    const [proCount, setproCount] = useState(0)
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap:'25px',
            width:'100%',
            // backgroundColor:'blue',
            color:'black',
            fontSize:'20px',
            height:'100px'
        }}>
            <Btns className="dec-btn" id="decBtn" onClick={() => setproCount(proCount - 1)} btnValue="-" />
            <H2 btnValue={proCount} />
            <Btns className="inc-btn" id="incBtn" onClick={() => setproCount(proCount + 1)} btnValue="+" />
        </div>
    )
}

export default CounterPractice