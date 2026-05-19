import React, { useContext, useReducer } from 'react'
import Btns from '../Btns/Btns';
import H2 from '../Headings/H2';
import { ProjectTheme } from './ChangTheme';
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    case 'reset': return { count: 0 };
    default: throw new Error();
  }
}
function Home() {
  const { theme } = useContext(ProjectTheme)
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <div style={{ background: theme === 'light' ? 'white' : '#222', color: theme === 'light' ? 'black' : 'white', height: '100vh' }}>
      <h1 style={{ padding: '20px', margin: '0px' }}>Home</h1>
      <div style={{
        background: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '25px',
          width: '100%',
          fontSize: '20px',
          height: '100vh'
        }}>
          <Btns className="dec-btn" id="decBtn" onClick={() => dispatch({ type: 'decrement' })} btnValue="-" />
          <H2 btnValue={state.count} />
          <Btns className="inc-btn" id="incBtn" onClick={() => dispatch({ type: 'increment' })} btnValue="+" />
          <Btns className="reset-btn" id="resetBtn" onClick={() => dispatch({ type: 'reset' })} btnValue="Reset" />
        </div>
      </div>
    </div>
  )
}
export default Home;
