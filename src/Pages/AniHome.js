import React from 'react'
import Nav from '../components/OverallComponents/Nav'
import CurrentSeasonGrid from '../components/PageComponents/CurrentSeasonGrid'
import Footer from '../components/OverallComponents/Footer'


const AniHome = () => {
  return (
    <div className='page-wrapper'>
        <Nav/>
        <div className='anime-wrapper'>
            <div className='upcoming-ani'>
              <CurrentSeasonGrid />
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AniHome