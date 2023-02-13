import React from 'react'
import Nav from '../components/OverallComponents/Nav'
import UpcomingAni from '../components/PageComponents/UpcomingAni'
import Footer from '../components/OverallComponents/Footer'
import CurrentSeason from '../components/PageComponents/CurrentAni'

const Home = () => {
  
  return (
    <div>
      <Nav/>
      <UpcomingAni/>
      <CurrentSeason/>
      <Footer/>
    </div>
  )
}

export default Home