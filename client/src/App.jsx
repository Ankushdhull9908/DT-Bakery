
import './App.css'
import {Route, Routes} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Login from './Pages/Login'

function App() {
  

  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    

    </div>
  )
}

export default App
