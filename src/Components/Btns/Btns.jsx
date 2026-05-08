import React from 'react'

function Btns(props) {
  return (
    <div>
      <button style={{width:'40px',height:'40px',fontSize:'25px',display:'flex',justifyContent:'center',alignItems:'center'}} className={props.className} id={props.id} onClick={props.onClick}>{props.btnValue}</button>
    </div>
  )
}

export default Btns
