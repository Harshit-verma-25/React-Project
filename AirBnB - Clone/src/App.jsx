import React from 'react'
import Navbar from './components/airbnb/Navbar'
import Hero from './components/airbnb/Hero'
import Card from './components/airbnb/card'
import data from './components/airbnb/data'
import './components/airbnb/style.css'

export default function App() {
  const Cards = data.map(item => {
    // console.log(item)
      return (
          <Card
              key={item.id}
              {...item}
          />
      )
  }) 
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className='cards-list'>
        {Cards}
      </section>
    </div>
  )
}