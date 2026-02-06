import React from 'react'
import { icons } from '../assets/Assets'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
        <img src={icons.heroimg} alt='heroimage'/>
        <div className="herocontent">
            <p>EnjoY Delicious Food</p>

        </div>
      
    </div>
  )
}

export default Hero
