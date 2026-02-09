import React, { useState } from 'react';
import './Login.css';
import { useAppContext } from '../context/AppContext';

const Login = () => {

  const {setlogindata} =useAppContext()
  const [email,setemail] = useState('')
  const [password,setpassword]= useState('')

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
  return (
    <div className={'modalOverlay'}>
      <div className={'loginContainer'}>
        
        
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
      </div>
    </div>
  );
};

export default Login;