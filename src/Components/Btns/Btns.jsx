import React, { useContext, useState } from 'react';
import { ProjectTheme } from '../Pages/ChangTheme';

function Btns(props) {
  const {theme} = useContext(ProjectTheme)
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const buttonStyle = {
    width: '90px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Inter', sans-serif",
    fontSize: '20px',
    fontWeight: '500',
    letterSpacing: '0.3px',
    backgroundColor: theme==='light'?'black':'white',
    color: theme==='light' ? 'white' : 'black',
    border: '1px solid #e2e8f0',
    borderRadius: '9999px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isActive ? 'scale(0.96)' : 'scale(1)',
    boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.08)' : 'none',
    marginLeft:'15px',
    marginRight:'15px'
  };

  return (
    <div style={{ display: 'inline-block' ,marginTop:'5px'}}>
      <button 
        style={buttonStyle}
        className={props.className} 
        id={props.id} 
        onClick={props.onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setIsActive(false); }}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
      >
        {props.btnValue}
      </button>
    </div>
  );
}

export default Btns;