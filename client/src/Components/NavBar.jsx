import { useNavigate, useSearchParams } from 'react-router-dom'
import {icons} from '../assets/Assets.js'
import './Navbar.css'
import { useAppContext } from '../context/AppContext.jsx'
import { useEffect, useState } from 'react'
import NavSideBar from './NavSideBar.jsx'
function NavBar() {

  const nav = useNavigate()

  const {width,showmenu,setshowmenu} = useAppContext()
  


  console.log('show menu',showmenu)

 

  return (
    <nav>
     
      <img src={icons.hamburger} alt='hamburger' id='showbtn' style={{display: width>=600 ? 'none':'block'}} onClick={()=> setshowmenu(true)}/>
        <h1 onClick={()=> nav('/')} style={{fontFamily:"'Brush Script MT', 'cursive'"}}>DT Bakery</h1>
        <ul>
          <li onClick={()=> nav('/')}>Home</li>
          <li onClick={()=> nav('/aboutus')}>About Us</li>
          <li >Contact US</li>
          <li onClick={()=> nav('/cart')}>Cart</li>
        </ul>
        <div className="navright">
            <img src={icons.search} alt='search'/>
            <img src={icons.user} alt='user' onClick={()=>nav('/login')} style={{display:width>=600 ? 'block': 'none'}}/>
            <img src={icons.heart} alt='like' style={{display:width>=600 ? 'block': 'none'}}/>
            <img src={icons.bag} alt='cart'/>
        </div>
        
        
        <NavSideBar />
         
      </nav>
  )
}

export default NavBar
