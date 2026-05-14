import React from 'react'
import CounterPractice from './CounterPractice.jsx'
import HandleInputValue from './HandleInputValue.jsx'
import H2 from '../Headings/H2.jsx'
import Btns from '../Btns/Btns.jsx'
import ChangeTheme, { themeContext } from './ChangeTheme.jsx'

function Practice() {
  return (
    <div>
      {/* <H2 btnValue='useState Examples' /> */}
      <ChangeTheme />
      <hr />
    </div>
  )
}

export default Practice