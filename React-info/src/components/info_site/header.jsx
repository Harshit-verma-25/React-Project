import React from 'react'
import './style.css'

export default function Header(props) {
    return (
        <nav 
            className={props.darkMode ? "dark" : ""}
        >
            <img
                src="/assets/react-logo.png" 
                alt="react-logo" 
            />
            <h3 className='logo-text'>React Facts</h3>
            <div className="project-toggler">
                <h4 className='title-text'>React Course - Project 1</h4>
                <div className="toggler">
                    <p className="toggler-light">Light</p>
                    <div 
                        className="toggler-slider"
                        onClick={props.toggleDarkMode}
                    >
                        <div className="toggler-slider-circle"></div>
                    </div>
                    <p className="toggler-dark">Dark</p>
                </div>
            </div>
        </nav>
    )
}