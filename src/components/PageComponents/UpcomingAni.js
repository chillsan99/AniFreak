import React from 'react'
import {useState, useEffect } from 'react';
import ItemCard from '../OverallComponents/ItemCard';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
import './slidestyle.css'
import { Link } from 'react-router-dom';

const UpcomingAni = () => { 
    const [upcoming, setUpcoming] = useState([]);


    const getUpcoming = async() => {
        const upcoming_data = await fetch(
            `https://api.jikan.moe/v4/seasons/upcoming?filter=tv&limit=25`
        ).then((res) => res.json());
        
        setUpcoming(upcoming_data.data)
    };

    useEffect(() => {
        getUpcoming();
    }, []);

    console.log(upcoming)

  return (
    <div className='upcoming-Anime'>
       <span className='info'> Upcoming Anime </span>
        <div className='upcoming-wrapper'>
            <Splide options={{
                type: 'loop',
                rewind:true, 
                autoplay: true,
                width:1250,
                perMove: 3,
                perPage: 3, 
                gap: '1rem',
                arrows: true,
                pagination: true,
                autoScroll: {
                    pauseOnHover: true,
                    pauseOnFocus: false,
                    speed: 3},
            }}> 
            {upcoming.map((data) => {
                return(
                    <SplideSlide key={data.mal_id}>
                    <Link to={"/show/" + data.mal_id}>
                    <ItemCard data = {data}/>
                    </Link>
                    </SplideSlide>
                )
            })}
            </Splide>
        </div>
    </div>
  )
}

export default UpcomingAni