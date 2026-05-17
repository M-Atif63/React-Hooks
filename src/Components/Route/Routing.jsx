// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Practice from '../Pages/Practice'
// import ChangTheme from '../Pages/ChangTheme'

// function Routing() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<ChangTheme/>}/>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default Routing


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Feedback from '../Pages/Feedback'
import Contact from '../Pages/Contact'
import Docs from '../Pages/Docs'
import Features from '../Pages/Features'
import Blogs from '../Pages/Blogs'

function Routing() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/docs' element={<Docs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/features' element={<Features/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
