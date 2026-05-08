import React, { useState } from 'react'
import Btns from '../Btns/Btns'
import H3 from '../Headings/H3.jsx'

function Practice() {
    const [proCount,setproCount] = useState(0)
  return (
    <div>
        <Btns className='inc-btn' id='incBtn' onClick={()=>setproCount(proCount + 1)} btnValue='Increment'></Btns>
        <H3 className='head-no-3' id='headNo3' value={proCount}/>
        <Btns className='dec-btn' id='decBtn' onClick={()=>setproCount(proCount - 1)} btnValue='Decrement'></Btns>
    </div>
  )
}

export default Practice
