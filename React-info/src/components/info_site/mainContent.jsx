import React from 'react'
import './style.css'

export default function MainContent(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1>Fun Facts about React</h1>
            <ul>
                <li>Was released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Is maintained by Facebook</li>
                <li>Has well over 100K stars on Github</li>
                <li>Build thousands of Enterprise apps, including Mobile Apps</li>
            </ul>
        </main>
    )
}