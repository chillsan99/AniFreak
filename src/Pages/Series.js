import React from 'react'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Footer from '../components/OverallComponents/Footer';
import Nav from '../components/OverallComponents/Nav';

const Show = () => {
    let params = useParams();
    const [series, setSeries] = useState({}); 
    
    const getSeries = async() => {
        const series_details = await fetch(
            `https://api.jikan.moe/v4/manga/${params.id}/full`
        ).then((res) => res.json());
        
      setSeries(series_details.data)
    };
    
    useEffect(() => {
        getSeries();
    }, [params.id]);

    return (
        <div className = "series-wrapper">
            <Nav/>
            <div className='series-container'>
                <span className='series-title'>
                </span>
            </div>
            <Footer/>
        </div>
    )
}

export default Show
