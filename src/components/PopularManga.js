import React from 'react'
import {useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
import './slidestyle.css'

const PopularManga = () => { 
    const [popmanga, setpopularManga] = useState([]);

    const getPopularManga = async() => {
        const popmanga_data = await fetch(
            `https://api.jikan.moe/v4/top/manga?q=manga`
        ).then((res) => res.json());
        
       setpopularManga(popmanga_data.data)
    };

    useEffect(() => {
        getPopularManga();
    }, []);

  return (
    <div className='Top-Manga'>
       <span className='info'> Top Manga Series</span>
        <div className='popular-wrapper'>
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
            {popmanga.map((data) => {
                return(
                   
              
                    <SplideSlide key={data.mal_id}>
                    <ItemCard data = {data}/>
                    </SplideSlide>
                )
            })}
            </Splide>
        </div>
    </div>
  )
}

export default PopularManga