import React, { useState } from 'react'
import Btns from '../Btns/Btns'
import H3 from '../Headings/H3.jsx'

function Practice() {
    const [proCount,setproCount] = useState(0)
  return (
    <div style={{
    display: 'inline-flex', 
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#f1f3f4', 
    padding: '8px 16px', 
    borderRadius: '50px', 
    border: '1px solid #dcdcdc',
    gap: '20px',
    fontFamily: 'sans-serif'
}}>
    <Btns 
        style={{
            border: 'none',
            background: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#5f6368',
            padding: '0 10px',
            lineHeight: '1'
        }}
        id='decBtn' 
        onClick={() => setproCount(proCount - 1)} 
        btnValue='−' 
    />

    <div style={{
        fontSize: '20px',
        fontWeight: '600',
        color: '#202124',
        minWidth: '30px',
        textAlign: 'center'
    }}>
        <H3 id='headNo3' value={proCount} />
    </div>

    <Btns 
        style={{
            border: 'none',
            background: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#1a73e8', // Blue color for action
            padding: '0 10px',
            lineHeight: '1'
        }}
        id='incBtn' 
        onClick={() => setproCount(proCount + 1)} 
        btnValue='+' 
    />
</div>

























  )
}

export default Practice
