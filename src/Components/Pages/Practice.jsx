import React from 'react'
import CounterPractice from './CounterPractice.jsx'
import HandleInputValue from './HandleInputValue.jsx'
import H2 from '../Headings/H2.jsx'

function Practice() {
  return (
    <div>
      <H2 btnValue='useState Examples'/>
      <CounterPractice/>
      <hr />
      <H2 btnValue='Handle Value Change Practice'/>
      <HandleInputValue/>
    </div>
  )
}

export default Practice
