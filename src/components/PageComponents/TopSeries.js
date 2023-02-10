import React from 'react'
import {useState, useEffect } from 'react';
import '@splidejs/react-splide/css/skyblue';
import './slidestyle.css'
import { Grid } from '@mui/material';
import LongCard from '../OverallComponents/LongCard';


const TopSeries = () => { 
    const [topSeries, setTopSeries] = useState([]);

    const getTopSeries = async() => {
        const top = await fetch(
            `https://api.jikan.moe/v4/top/anime?&limit=10`
        ).then((res) => res.json());
        
       setTopSeries(top.data)
    };

    useEffect(() => {
        getTopSeries();
    }, []);

  return (
    <div className='Current-Season'>
        <div className='current-wrapper'>
            {topSeries.map((data) => {
                return(            
                    <Grid p = {0.5}>
                     <LongCard data = {data}/>
                    </Grid>
                )
            })}
        </div>
    </div>
  )
}

export default TopSeries