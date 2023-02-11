import React from 'react'
import {useState, useEffect } from 'react';
import '@splidejs/react-splide/css/skyblue';
import './topseries.css'
import { Grid, Box } from '@mui/material';
import ItemCard from '../OverallComponents/ItemCard';


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
    <div className='Top-Series'>
        <div className='top-series-wrapper'>
            {topSeries.map((data) => {
                return(
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item  zeroMinWidth>
                            <Box>     
                                <ItemCard data = {data}/>
                            </Box> 
                        </Grid> 
                    </Grid>
                )
            })}
        </div>
    </div>
  )
}

export default TopSeries