import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowcase from './CategoryShowcase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponser from './Sponser'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowcase/>
      <Register/>
      <LocationSprade/>
      <AboutUs/>
      <AppSection/>
      <Sponser/>
    </div>
  )
}

export default Home