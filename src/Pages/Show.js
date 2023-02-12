import React from 'react'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

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
        <div>{show.title}</div>
    )
}

export default Show