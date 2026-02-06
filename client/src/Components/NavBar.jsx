import { useNavigate } from 'react-router-dom'
import {icons} from '../assets/Assets.js'
import './Navbar.css'
function NavBar() {

  const nav = useNavigate()
  return (
    <nav>
        <h1 style={{fontFamily:"'Brush Script MT', 'cursive'"}}>DT Bakery</h1>
        <ul>
          <li onClick={()=> nav('/')}>Home</li>
          <li onClick={()=> nav('/aboutus')}>About Us</li>
          <li >Contact US</li>
          <li onClick={()=> nav('/cart')}>Cart</li>
        </ul>
        <div className="navright">
            <img src={icons.search} alt='search'/>
            <img src={icons.user} alt='user' onClick={()=>nav('/login')}/>
            <img src={icons.heart} alt='like'/>
            <img src={icons.bag} alt='cart'/>
        </div>
      </nav>
  )
}

export default NavBar
