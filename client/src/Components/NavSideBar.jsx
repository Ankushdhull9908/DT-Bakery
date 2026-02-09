import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { icons } from '../assets/Assets'

function NavSideBar() {
    const {width,showmenu,setshowmenu,logindata,setlogindata} = useAppContext()

    const [showlogin,setshowlogin]=useState(false)
    const [email,setemail] = useState('')
      const [password,setpassword]= useState('')
    console.log('login data',logindata)
      function submitForm()
      {
          if(!email || !password) return
    
          if(email==='user@gmail.com' && password==='123')
          {
            setlogindata(data)
            const data = {email:email,role:'user'}
            alert('login successfull')
            localStorage.setItem('userdata',JSON.stringify(data))

          }else if(email==="admin@gmail.com" && password==='123')

          {
            setlogindata(data)
            const data = {email:email,role:'admin'}
            localStorage.setItem('userdata',JSON.stringify(data))
            alert('login successfull')
          }else{
            
            alert('Wrong password')
          }
    
      }

    const nav = useNavigate()
  return (
    <div className="navsidebar" style={{left: width<600 &&showmenu? '0': '-100vw'}}>
          
         
          
            <div className="menuandlogin">
            <div className="menubox"onClick={()=> setshowlogin(false)} style={{backgroundColor:showlogin?'white':'black',color:showlogin?'black':'white'}}>
                <img src={icons.hamburger} alt='hamburger'/>
                <p>Menu</p>
               
            </div>
            {logindata === null && (
  <div
    className="menubox"
    onClick={() => setshowlogin(true)}
    style={{
      backgroundColor: showlogin ? "black" : "white",
      color: showlogin ? "white" : "black",
    }}
  >
    <img src={icons.user} alt="user" />
    <p>Login</p>
  </div>
)}

          </div>
          {
            showlogin?<div className={'loginContainer'}>
        
        
        <h1 className={'logo'}>DT Bakery</h1>
        <hr className={'divider'} />
        
        <p className={'subtitle'}>Great to have you back!</p>
        
        <form className={'loginForm'}>
          <div className={'inputGroup'}>
            <input type="email" placeholder="Email adress" required value={email} onChange={(e)=> setemail(e.target.value)}/>
          </div>
          
          <div className={'inputGroup'}>
            <input type="password" placeholder="Password" required value={password} onChange={(e)=> setpassword(e.target.value)}/>
          </div>
          
          <a href="#forgot" className={'forgotPassword'}>
            Forgot your password?
          </a>
          
          <button type="submit" className={'loginButton'} onClick={()=> submitForm()}>
            LOG IN
          </button>
        </form>
        
        <div className={'loginfooter'}>
          Don't have an account? <a href="#register">Register now</a>
        </div>
      </div> : <ul>

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
          <li onClick={()=>{ logindata? nav('/'):nav('/login'),
            setshowmenu(false)
          }}><p>{logindata? 'Profile':'Login'}</p>
          <div className="leftarrows">
                <img src={icons.rightarrow} alt='left'/>
                </div>
          </li>
        </ul>
          }
          
        <div className="closebtn" onClick={()=> setshowmenu(false)}>
            <p>close</p>
          </div>
        </div>
  )
}

export default NavSideBar
