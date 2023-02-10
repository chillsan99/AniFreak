import React from 'react'
import Nav from '../components/OverallComponents/Nav'
import UpcomingAni from '../components/PageComponents/UpcomingAni'
import PopularManga from '../components/PageComponents/PopularManga'
import Footer from '../components/OverallComponents/Footer'
import CurrentSeason from '../components/PageComponents/CurrentAni'

const Home = () => {
  
  return (
    <div>
      <Nav/>
      <UpcomingAni/>
      <CurrentSeason/>
      <PopularManga/>
      <Footer/>
    </div>
  )
}

export default Home