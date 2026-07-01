import React, { useContext, useEffect, useState } from 'react'
import { ProjectTheme } from './ChangTheme'


function AboutUseEffect() {
    const { theme } = useContext(ProjectTheme)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [dayOrNight, setDayOrNight] = useState("AM")

    useEffect(() => {
        setTimeout(() => {
            setSeconds(seconds + 1)
        }, 1000)
        if (seconds == 60) {
            setSeconds(0)
            setMinutes(minutes + 1)
        }
        else if (minutes == 60) {
            setMinutes(0)
            setHours(hours + 1)
        }
        else if (hours == 24) {
            setHours(0)
        }
        // else if (dayOrNight <= 13) {
        //     setDayOrNight("PM")
        // }
    })
    return (
        <div>
            <div style={{ paddingLeft: '30px', background: theme === 'light' ? 'white' : '#222', color: theme === 'light' ? 'black' : 'white', height: '100%' }}>
                <div>
                    <h1 style={{ padding: '20px', margin: '0px' }}>About UseEffect</h1>
                    <h2>Q : What is useEffect?</h2>
                    <h2>Ans : useEffect is a Powerful hook</h2><hr />
                    <h2>Q : Where is used useEffect hook?</h2>
                    <h2>Ans : useEffect hook is used for perform any side effect in our component.</h2>
                    <hr />
                    <h1>Important Points:</h1>
                    <h2>useEffect hook accept two arguments</h2>
                    <h2>⭐First Function</h2>
                    <h2>⭐Second Dependency </h2>
                    <h2>Note : the Second argument is optional</h2><hr />
                </div>
                <div>
                    <h1>Create Watch with useEffect hook</h1>
                    <div style={{
                        width: '100%',
                        textAlign: 'center',
                        fontSize: '50px'
                    }}>
                        <h1 style={{
                            margin: '0px',

                        }}>{hours} : {minutes} : {seconds}
                            <span
                                style={{
                                    paddingLeft: '20px',
                                    fontSize: "40px"
                                }}>
                                {dayOrNight}</span>
                        </h1>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutUseEffect
