// import React, { createContext, useState } from 'react'
// import CounterPractice from '../Pages/CounterPractice.jsx'

// export const themeContext = createContext()

// function ChangTheme() {
//   const [theme, setTheme] = useState('light')

//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setTheme('dark')
//     }
//     if (theme === 'dark') {
//       setTheme('light')
//     }
//   }
//   return (
//     <div>
//       <themeContext.Provider value={{ theme, toggleTheme }}>
//         <CounterPractice />
//       </themeContext.Provider>
//     </div>
//   )
// }

// export default ChangTheme













import React, { createContext, useState } from 'react'

export const ProjectTheme = createContext()

function ChangTheme({children}) {
  const [theme , setTheme] = useState('light');

  const toggleColor=()=>{
    if(theme==='light'){
      setTheme('dark')
    }
    else if(theme==='dark'){
      setTheme('light')
    }
  }
  return (
    <div>
      <ProjectTheme.Provider value={{theme,toggleColor}}>
        {children}
      </ProjectTheme.Provider>
    </div>
  )
}

export default ChangTheme;
