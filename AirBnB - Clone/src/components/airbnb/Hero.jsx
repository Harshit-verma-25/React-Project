import React from 'react'
import './style.css'

function Hero() {
    return (
        <section className='hero'>
            <img src="/assets/photo-grid.png" className='hero-logo'/>
            <h1 className='head-heading'>Online Experiences</h1>
            <p className='head-text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero