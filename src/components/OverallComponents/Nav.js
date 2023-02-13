import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return(
    <nav>
      <div className='nav-container'>
        <div className='nav-options'>
           <span className='title'><Link to='/'>AniFreak </Link></span> 
              <ul>      
                <li>About </li>
                <li><Link to={"/anime"}> Anime </Link></li>
                <li> Manga </li>
                <li> Profile </li>
              </ul>
          </div>
      </div>  
   </nav>
  )
}

export default Nav