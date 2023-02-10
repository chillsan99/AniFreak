import React from 'react'
import CurrentSeason from '../components/PageComponents/CurrentAni'
import Nav from '../components/OverallComponents/Nav'
import UpcomingAni from '../components/PageComponents/UpcomingAni'
import TopSeries from '../components/PageComponents/TopSeries'


const AniHome = () => {
  return (
    <div className='page-wrapper'>
        <Nav/>
        <div className='anime-wrapper'>
            <div className='upcoming-ani'>
                <TopSeries/>
            </div>
        </div>
    </div>
  )
}

export default AniHome