import React from 'react'
import './Nav.css'

const Nav = () => {
  return(
    <nav>
      <div className='nav-container'>
        <div className='nav-options'>
           <span className='title'> AniFreak </span> 
              <ul>      
                <li> About </li>
                <li> Anime </li>
                <li> Manga </li>
                <li> Profile </li>
              </ul>
          </div>
      </div>  
   </nav>
  )
}

export default Nav