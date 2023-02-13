import React from 'react'
import {useState, useEffect } from 'react';
import ItemCard from '../OverallComponents/ItemCard';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
import './slidestyle.css'
import { Link } from 'react-router-dom';

const CurrentSeason = () => { 
    const [currentSeason, setCurrentSeason] = useState([]);

    const getCurrentSeason = async() => {
        //const check = localStorage.getItem('currentSeason');

        //if(check){
        //    setCurrentSeason(check)
        //}else{
        const current = await fetch(
            `https://api.jikan.moe/v4/seasons/now`
        ).then((res) => res.json());

       // localStorage.setItem('currentSeason', current.data)
        setCurrentSeason(current.data)
        };
   // }

    useEffect(() => {
        getCurrentSeason();
    }, []);

  return (
    <div className='Current-Season'>
       <span className='info'> This Season in Anime</span>
        <div className='current-wrapper'>
            <Splide options={{
                lazyLoad:'true',
                height:'580px',
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
            {currentSeason.map((data) => {
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

export default CurrentSeason