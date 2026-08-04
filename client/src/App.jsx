
import './App.css'
import {Route, Routes} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Login from './Pages/Login'
import HomePage from './Pages/HomePAGE1'
import Footer from './Components/Footer'
import AboutUs from './Pages/AboutUs'
import Cart from './Pages/Cart'
import { useAppContext } from './context/AppContext'
import AdminPage from './Pages/AdminPage'
import UserPage from './Pages/UserPage'
import AdminManageProductPage from './Pages/AdminManageProductPage'
import AdminDashboard from './Pages/AdminDashboard'
import Checkout from './Pages/Checkout'
import ItemDetail from './Pages/ItemDetail'

function App() {
  const {width,logindata} = useAppContext()

  console.log('logindata',logindata)
  

  return (
    <div className='app'>

      <NavBar/>
      <Routes>
        <Route path='*' element={<HomePage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/admin' element={<AdminPage/>}>
         <Route index element={<AdminDashboard />} />
          <Route path='admindashboard' index element={<AdminDashboard/>}/>
          <Route path='adminmanageproduct' element={<AdminManageProductPage/>}/>
        </Route>
        <Route path='/user' element={logindata===null ? <Login/> : <UserPage/>}/>
      </Routes>
      <Footer/>
    

    </div>
  )
}

export default App
