
import './App.css'
import {Route, Routes} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Login from './Pages/Login'
import HomePage from './Pages/HomePAGE'
import Footer from './Components/Footer'
import AboutUs from './Pages/AboutUs'
import Cart from './Pages/Cart'


function App() {
  

  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    

    </div>
  )
}

export default App
