import React, { useState } from 'react';
import './Login.css';
import { useAppContext } from '../context/AppContext';

const Login = () => {
 
  const {setlogindata} =useAppContext()
  const [email,setemail] = useState('')
  const [password,setpassword]= useState('')
  const [buttontext,setbuttontext]=  useState('Login')
  function submitForm(e)
  {
      //e.preventDefault()
      if(!email || !password) return


      if(buttontext==='Login')
      {
          alert('Login runned')
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
      }else{
          alert('register runned')
      }

      

  }

  return (
    <div className={'modalOverlay'}>
      <div className={'loginContainer'}>
        
        
        <h1 className={'logo'}>DT Bakery</h1>
        <hr className={'divider'} />
        {
          buttontext==="Login" ? <p className={'subtitle'}>Great to have you back!</p> :''
        }
        
        
        
        <form className={'loginForm'}>
          <div className={'inputGroup'}>
            <input type="email" placeholder="Email adress" required value={email} onChange={(e)=> setemail(e.target.value)}/>
          </div>
          
          <div className={'inputGroup'}>
            <input type="password" placeholder="Password" required value={password} onChange={(e)=> setpassword(e.target.value)}/>
          </div>
          {
            buttontext==='Login' ? <a href="#forgot" className={'forgotPassword'}>
            Forgot your password?
          </a> : ''
          }
          
          
          
          <button type="submit" className={'loginButton'} onClick={()=> submitForm()}>
            {buttontext}
          </button>
        </form>
        
        {
          buttontext==="Login" ? <div className={'loginfooter'}>
          Don't have an account? <p onClick={()=> setbuttontext('Register')}>Register now</p>
        </div> :  <div className={'loginfooter'}>
          Already Have an Account? <p onClick={()=> setbuttontext('Login')}>Login</p>
        </div>
        }
      </div>
    </div>
  );
};

export default Login;