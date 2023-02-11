import { Grid } from '@mui/material';
import {useState, useEffect } from 'react';
import React from 'react'
import ItemCard from '../OverallComponents/ItemCard';


const CurrentSeasonGrid = () => {
  const [currentSeason, setCurrentSeason] = useState([]);

  const getCurrentSeason = async() =>{
    const current = await fetch(
        `https://api.jikan.moe/v4/seasons/now`
    ).then((res) => res.json());
    
    setCurrentSeason(current.data)
  }
  
  useEffect(()=>{
    getCurrentSeason();
  },[]);

    return (
        <div className='current-season-grid'>
            <span className='current-title'> This Season in Anime </span>
                <div className='current-wrapper'>
                    <Grid sx={{ flexGrow: 1, justifyContent:'center' }} container rowSpacing={6} columnSpacing={{ xs: 2, sm: 3, md: 9 }}>
                            {currentSeason.map((data) => {
                            return(
                                <Grid item xs={{xs: 2, sm: 3, md: 9}}>
                                    <ItemCard data= {data}/>
                                </Grid>
                            )
                            })}
                    </Grid>
                </div>
            </div>
  )
}

export default CurrentSeasonGrid