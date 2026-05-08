import React from 'react'

function Btns(props) {
  return (
    <div>
      <button className={props.className} id={props.id} onClick={props.onClick}>{props.btnValue}</button>
    </div>
  )
}

export default Btns
