import React, { useContext, useEffect, useRef, useState } from 'react'
import { ProjectTheme } from './ChangTheme'

function Docs() {
    const {theme} = useContext(ProjectTheme)
    // const [inputValue,setInputValue] = useState('')
    // const previousValue = useRef()
    // useEffect(()=>{
    //   previousValue.current.value = inputValue
    // },[inputValue])

    // -- React Form--

    // Q1) React mein controlled aur uncontrolled components kya hote hain?
    // Ans) Controlled Component : 
    //                           har wo input element controlled component hota hai jis 
    // ki value React state(useState) se control ki jati hai, aur us value mein koi bhi
    // tabdeeli event handler ke zariye manage hoti hai jo state ko update karte hain
    
    // Examples of controlled components:
    // input ,textarea ,select elements controlled components ke examples hain

    // Uncontrolled Component :
    //                           jo component controlled component ke ilawa ho usko
    //  uncontrolled component kaha jata hai

    return (
    <div style={{background:theme==='light'?'white':'#222',color:theme==='light'?'black':'white',height:'100vh'}}>
      <h1 style={{padding:'20px',margin:'0px'}}>Docs</h1>
    {/* <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
    <h1>Current Value : {inputValue}</h1>
    <h1>Previous Value : {previousValue.current.value}</h1> */}
    </div>

  )
}

export default Docs
