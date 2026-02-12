import React from 'react'
import { icons } from '../assets/Assets'
import './Hero.css'
import { motion } from "framer-motion";

function Hero() {
  return (
     <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
    <div className='hero'>
       
        <div className="herocontent">
            <div className="heroheading">
              <h1>Chocolate Cake</h1>
            </div>
            <div className="heropara">
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis debitis mollitia explicabo quae consectetur, ipsam fugiat dignissimos sapiente repellendus at harum deserunt corporis ab rerum tenetur nesciunt odit inventore numquam.</p>
            </div>
            <div className="herobuttoncollection">
              <div className="herobtn">
                <p>SHOP NOW</p>
              </div>
              <div className="herobtn">
                <p>VIEW COLLECTION</p>
              </div>
            </div>


        </div>
      
    </div>
    </motion.div>
  )
}

export default Hero
