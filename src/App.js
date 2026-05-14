// import logo from './logo.svg';
// import './App.css';
// import Practice from './Components/Pages/CounterPractice';
// import H3 from './Components/Headings/H3.jsx';
// import H1 from './Components/Headings/H1.jsx';



// function App() {
// return (
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
//     <div>
//       <H1 value='React Hooks Practice'/>
//         <Practice/>
//     </div>
//   );
// }

// export default App;



// import React, { createContext, useState } from 'react'
import React from 'react'
import Routing from '../src/Components/Route/Routing.jsx'
import ChangTheme from './Components/Pages/ChangTheme.jsx'
function App() {
  return (
    <div>
      <ChangTheme>
      <Routing/>
      </ChangTheme>
    </div>
  )
}

export default App



