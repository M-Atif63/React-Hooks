import React, { useContext, useState } from 'react'
import InputField from '../InputFields/InputField'
import { themeContext } from './ChangeTheme'

function HandleInputValue() {
  const {theme} = useContext(themeContext)
  const [changeValue, setChangeValue] = useState('')
  return (
    <div style={{
            background: theme === 'light' ? 'white' : 'black', 
            color: theme === 'light' ? 'black' : 'white',
        }}>
      <center>
        <InputField placeholderValue="Enter Your Comment" styling={{
          width: "300px",
          height: "30px",
          borderRadius: "5px",
          border: "1px solid grey"
        }}
          onChange={(e) => setChangeValue(e.target.value)} />
        <p>{changeValue}</p>
      </center>
    // </div>
  )
}

export default HandleInputValue
