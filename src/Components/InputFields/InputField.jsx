import React from 'react'

function InputField(props) {
  return (
    <div>
      <input type={props.type} value={props.value} onChange={props.handlevalueChaange}/>
    </div>
  )
}

export default InputField
