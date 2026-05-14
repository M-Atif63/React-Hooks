import React, { useState } from 'react'
import { createContext } from 'react'
import HandleInputValue from './HandleInputValue'
import CounterPractice from './CounterPractice'
import H2 from '../Headings/H2'

export const themeContext = createContext()

function ChangeTheme() {
    const [theme, setTheme] = useState("light")

    const toggleTheme =()=>{
        if(theme === "light"){
            setTheme("dark")
        }
        if(theme === "dark"){
            setTheme("light")
        }
    }
    return (
        <div>
            <themeContext.Provider value={{theme,toggleTheme}}>
                <center><h2>useState Example</h2></center>
                <HandleInputValue />
                <CounterPractice />
            </themeContext.Provider>
        </div>
    )
}

export default ChangeTheme
