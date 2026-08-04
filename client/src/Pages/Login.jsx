import React, { useState } from 'react';
import './Login.css';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5500';

const Login = () => {
  const { setlogindata } = useAppContext();
  const nav = useNavigate();

  const [buttontext, setbuttontext] = useState('Login');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState('');

  // Reusable helper to handle local storage and navigation
  const finalizeLogin = (userData) => {
    setlogindata(userData);
    localStorage.setItem('userdata', JSON.stringify(userData));
    setTimeout(()=>{
        //nav(userData.role === 'admin' ? '/admin' : '/');

        if(userData.role==='admin')
        {
          nav('/admin')
        }else if(userData.role==='user'){
          nav('/user')
        }
    },1000)
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror('');

    if (!email || !password) {
      seterror('Please fill in all fields');
      return;
    }
    if (buttontext === 'Register' && !name) {
      seterror('Name is required');
      return;
    }

    setloading(true);

    try {
      const endpoint = buttontext === 'Login' ? '/api/user/login' : '/api/user/register';
      const body = buttontext === 'Login'
        ? { email, password }
        : { name, email, password };

      const response = await fetch(`${API}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const result = await response.json();

      // If server is ONLINE but credentials are wrong
      if (!result.success) {
        seterror(result.message || 'Something went wrong');
        setloading(false);
        return;
      }

      // Successful Online Login
      finalizeLogin({
        id: result.data.id,
        name: result.data.name,
        email: result.data.email,
        role: result.data.role,
        token: result.data.token,
      });

    } catch (err) {
      // --- OFFLINE FALLBACK ---
      // This triggers ONLY if the fetch() fails (Server Down / No Internet)
      console.warn("Server unreachable. Entering Offline Mode.");

      const fallbackData = {
        id: Date.now(), // Generate temporary ID
        name: name || email.split('@')[0], // Use provided name or email prefix
        email: email,
        role: email.includes('admin') ? 'admin' : 'user', // Basic role check
        token: 'offline_token_local_access',
        isOffline: true
      };

      finalizeLogin(fallbackData);

    } finally {
      setloading(false);
    }
  };

  return (
    <div className={'modalOverlay'}>
      <div className={'loginContainer'}>
        <h1 className={'logo'}>DT Bakery</h1>
        <hr className={'divider'} />
        
        {buttontext === 'Login' && (
          <p className={'subtitle'}>Great to have you back!</p>
        )}

        {error && (
          <p className="error-text" style={{ color: '#e05252', fontSize: '13px', marginBottom: '10px', textAlign: 'center' }}>
            {error}
          </p>
        )}

        <form className={'loginForm'} onSubmit={handleSubmit}>
          {buttontext === 'Register' && (
            <div className={'inputGroup'}>
              <input
                type="text"
                placeholder="Full name"
                required
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
          )}

          <div className={'inputGroup'}>
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className={'inputGroup'}>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          {buttontext === 'Login' && (
            <a href="#forgot" className={'forgotPassword'}>
              Forgot your password?
            </a>
          )}

          <button
            type="submit"
            className={'loginButton'}
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Authenticating...' : buttontext}
          </button>
        </form>

        <div className={'loginfooter'}>
          {buttontext === 'Login' ? (
            <>
              Don't have an account?{' '}
              <p onClick={() => { setbuttontext('Register'); seterror(''); }}>
                Register now
              </p>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <p onClick={() => { setbuttontext('Login'); seterror(''); }}>
                Login
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;