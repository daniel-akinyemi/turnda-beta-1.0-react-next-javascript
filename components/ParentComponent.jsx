'use client'
import React from 'react'
import Header from './Header'
import { useState } from 'react'
import SecondCard from './SecondCard'
import DetailedInformation from './DetailedInformation'
import MainWeatherCard from './MainWeatherCard'

const ParentComponent = () => {

const [location, setLocation] = useState('')  


  return (
    <div>
    <Header location={location} setLocation={setLocation} />
      <MainWeatherCard location={location} />
      <SecondCard/>
      <DetailedInformation/>
    </div>
  )
}

export default ParentComponent