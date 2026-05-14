import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Practice from '../Pages/Practice'

function Routing() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Practice/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
