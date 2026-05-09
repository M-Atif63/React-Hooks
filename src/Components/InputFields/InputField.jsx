import React from 'react'

function InputField(props) {
  return (
    <div>
      <input style={props.styling} type={props.type} onChange={props.onChange} placeholder={props.placeholderValue}/>
    </div>
  )
}

export default InputField
