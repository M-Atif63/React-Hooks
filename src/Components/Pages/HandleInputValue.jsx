import React, { useContext, useState } from 'react'
import InputField from '../InputFields/InputField'
import { themeContext } from './ChangeTheme'

function HandleInputValue() {
  const [changeValue, setChangeValue] = useState('')
  return (
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
  )
}

export default HandleInputValue
