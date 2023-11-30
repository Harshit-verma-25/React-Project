import React from 'react'
import './style.css'

function Header() {
    return(
        <nav>
            <img src="/assets/troll-face.png" className='header-logo' />
            <p className='logo-text'>MEME GENERATOR</p>
            <p className='title-text'>React Course - Project 3</p>
        </nav>
    )
}

export default Header