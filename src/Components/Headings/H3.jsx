import React from 'react'

function H3(props) {
  return (
    <div>
      <h3 id={props.id} className={props.className}>{props.value}</h3>
    </div>
  )
}

export default H3
