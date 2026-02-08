import React from 'react'
import './DeliciousOffer.css'
import { icons } from '../assets/Assets'

function DeliciousOfferSection() {
  return (
    <div className='deliciousOffer'>
        <div className="deliciousofferHeading">
            <h1>OUR DELICIOUS OFFER</h1>
        </div>
        <div className="deliciousoffercontent">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis ea eius consequatur quo sint explicabo quam fuga. Nihil, corporis!
        </p>
        </div>
        
        
        <div className="deliciousoffercards">
            <div className="cakecard">
                
                    <img src={icons.cake1}/>
                    <h3>Cake</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur!</p>
                
            </div>
            <div className="cakecard">
                
                    <img src={icons.cake2}/>
                    <h3>Cake</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur!</p>
                
            </div>
            <div className="cakecard">
                
                    <img src={icons.cake3}/>
                    <h3>Cake</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur!</p>
                
            </div>
            <div className="cakecard">
                
                    <img src={icons.cake4}/>
                    <h3>Cake</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tenetur!</p>
            
            </div>
        </div>
      
    </div>
  )
}

export default DeliciousOfferSection
