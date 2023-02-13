import React from 'react'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Nav from '../components/OverallComponents/Nav';
import Footer from '../components/OverallComponents/Footer';
import './Show.css'

const Show = () => {
    let params = useParams();
    const [show, setShow] = useState({}); 
    
    const getShow = async() => {

        const show_details = await fetch(
            `https://api.jikan.moe/v4/anime/${params.id}/full`
        ).then((res) => res.json());
        
      setShow(show_details.data)
    };
    
    useEffect(() => {
        getShow();
    }, [params.id]);

    return (
        <div className = "show-wrapper">
            <Nav/>
            <div className='show-container'>
                <div className ='side-info-container'>
                    <span className='show-poster'>                    
                    i will get hte img l8er
                    </span>
                        <div className='other-info-container'>
                            <ul>
                                <li>English Title: <span className='english-title'>{show.title_english}</span></li>
                                <li><span className='source'>Source: {show.source}</span></li>
                                <li><span className='total-episodes'>Total Episodes: {show.episodes}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className = 'main-info'>
                        <div className='titles'>
                            <ul>
                                <li><span className='title-main'>{show.title}</span></li>
                                <li><span className='title-jp'>{show.title_japanese}</span></li>
                            </ul>
                        </div>
                        <span className='synopsis'>
                                {show.synopsis}
                        </span>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Show