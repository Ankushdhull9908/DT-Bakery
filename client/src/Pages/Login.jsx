import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className={'modalOverlay'}>
      <div className={'loginContainer'}>
        
        
        <h1 className={'logo'}>DT Bakery</h1>
        <hr className={'divider'} />
        
        <p className={'subtitle'}>Great to have you back!</p>
        
        <form className={'loginForm'}>
          <div className={'inputGroup'}>
            <input type="email" placeholder="Email adress" required />
          </div>
          
          <div className={'inputGroup'}>
            <input type="password" placeholder="Password" required />
          </div>
          
          <a href="#forgot" className={'forgotPassword'}>
            Forgot your password?
          </a>
          
          <button type="submit" className={'loginButton'}>
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