import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProjectTheme } from '../Pages/ChangTheme'
import '../../App.css';
import Btns from '../Btns/Btns';

function Navbar() {
    const { theme, toggleColor } = useContext(ProjectTheme)
    const mainDiv = {
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'space-evenly',
        gap: '5px',
        width: '100%',
        backgroundColor: theme === 'light' ? 'white' : '#222',
        color: theme === 'light' ? 'black' : 'white',
    }
    const navListStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        // marginTop: '5px',
        gap: '12px',
        TextDecoderation: 'none',
        marginTop: '35px'
    }
    const isDark = theme === 'dark';

    const styles = {
        label: {
            position: 'relative',
            display: 'inline-block',
            width: '52px',
            height: '20px',
            padding: '7px',
            boxSizing: 'border-box',
            marginTop:'15px',
            margin: '15px'
        },
        input: {
            opacity: 0,
            width: 0,
            height: 0,
        },
        slider: {
            position: 'absolute',
            cursor: 'pointer',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: isDark ? '#8796A5' : '#aab4be',
            transition: '0.4s ease',
            borderRadius: '20px',
        },
        thumb: {
            position: 'absolute',
            content: '""',
            height: '32px',
            width: '32px',
            left: 0,
            bottom: '-4.5px',
            backgroundColor: isDark ? '#003892' : '#001e3c',
            transform: isDark ? 'translateX(22px)' : 'translateX(0px)',
            transition: '0.4s ease',
            borderRadius: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: isDark
                ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="%23fff" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
                : `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="%23fff" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    };

    return (
        <div style={mainDiv}>
            <div className='title' style={{ fontSize: '20px', marginRight: '150px', marginTop: '10px' }}>
                <h3>Muhammed Atif</h3>
            </div>
            <div className='navList' style={navListStyle}>
                <NavLink className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to={'/'} style={{ color: theme === 'light' ? 'black' : 'white', }}>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to={'/about'} style={{color: theme === 'light' ? 'black' : 'white', }}>About</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to={'/blogs'} style={{ textDecoration: 'none', color: theme === 'light' ? 'black' : 'white', }}>Blogs</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to={'/docs'} style={{ textDecoration: 'none', color: theme === 'light' ? 'black' : 'white', }}>Docs</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to={'/feedback'} style={{ textDecoration: 'none', color: theme === 'light' ? 'black' : 'white', }}>Feedback</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to={'/contact'} style={{ textDecoration: 'none', color: theme === 'light' ? 'black' : 'white', }}>Contact</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} to={'/features'} style={{ textDecoration: 'none', color: theme === 'light' ? 'black' : 'white', }}>Features</NavLink>
                <Btns btnValue="Login" />
                <label style={styles.label} htmlFor="theme-toggle-input">
                    <input
                        type="checkbox"
                        id="theme-toggle-input"
                        checked={isDark}
                        onChange={toggleColor}
                        style={styles.input}
                        aria-label="Toggle theme"
                    />
                    <span style={styles.slider}>
                        <span style={styles.thumb} />
                    </span>
                </label>
            </div>
        </div>
    )
}

export default Navbar