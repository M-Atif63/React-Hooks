import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Practice from '../Pages/Practice'
import ChangTheme from '../Pages/ChangTheme'

function Routing() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChangTheme/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
