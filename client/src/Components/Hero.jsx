import React from 'react'
import './Hero.css'
import { motion } from "framer-motion"
import heroBg from '../assets/hero.jpg'

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='hero'>
        <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-eyebrow">Artisan Bakery · Est. 2012</p>
          <h1 className="hero-title">
            Baked with<br /><em>Love & Craft</em>
          </h1>
          <div className="hero-divider"></div>
          <p className="hero-desc">
            Every cake, every pastry — made from scratch with the finest ingredients.
            A little warmth in every bite.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Shop Now</button>
            <button className="btn-outline">View Collection</button>
          </div>
        </div>

        <div className="hero-badge">
          <span className="hero-badge-num">150+</span>
          <span className="hero-badge-label">Handcrafted Recipes</span>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero