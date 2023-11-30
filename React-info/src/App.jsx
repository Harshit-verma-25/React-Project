import React from 'react'
import Header from './components/info_site/header'
import MainContent from './components/info_site/mainContent'

export default function App() {
  
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
    setDarkMode(prev => !prev)
  }
  const style = {
    backgroundColor: darkMode ? '#282D35' : '#ffffff'
  }
  return(
    <div className='container' style={style}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}  
      />
      <MainContent
        darkMode={darkMode}
      />
    </div>
  )
}