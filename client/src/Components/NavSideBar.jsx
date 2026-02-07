import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { icons } from '../assets/Assets'

function NavSideBar() {
    const {width,showmenu,setshowmenu} = useAppContext()

    const nav = useNavigate()
  return (
    <div className="navsidebar" style={{left: width<600 &&showmenu? '0': '-100vw'}}>
          
         
          <ul>
            <div className="menuandlogin">
            <div className="menubox">
                <img src={icons.hamburger} alt='hamburger'/>
                <p>Menu</p>
               
            </div>
            <div className="menubox">
                <img src={icons.user} alt='user'/>
                <p>Login</p>

            </div>
          </div>

          <li onClick={()=> {nav('/')
            setshowmenu(false)}}>
                <p>Home</p>
                <div className="leftarrows">
                <img src={icons.rightarrow} alt='left'/>
                </div>
                
                </li>
          <li onClick={()=> {nav('/aboutus')
            setshowmenu(false)}}><p>About Us</p>
            <div className="leftarrows">
                <img src={icons.rightarrow} alt='left'/>
                </div>
            </li>
          <li ><p>
            Contact US
          </p>

            <div className="leftarrows">
                <img src={icons.rightarrow} alt='left'/>
                </div>
          </li>
          <li onClick={()=>{ nav('/cart')
            setshowmenu(false)
          }}><p>Cart</p>
          <div className="leftarrows">
                <img src={icons.rightarrow} alt='left'/>
                </div>
          </li>
          <li onClick={()=>{ nav('/login')
            setshowmenu(false)
          }}><p>Login</p>
          <div className="leftarrows">
                <img src={icons.rightarrow} alt='left'/>
                </div>
          </li>
        </ul>
        <div className="closebtn" onClick={()=> setshowmenu(false)}>
            <p>close</p>
          </div>
        </div>
  )
}

export default NavSideBar
