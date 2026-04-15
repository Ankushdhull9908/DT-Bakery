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

  const handleSubmit = async (e) => {
    e.preventDefault();                          // ← was missing, form was refreshing page
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

      if (!result.success) {
        seterror(result.message || 'Something went wrong');
        return;
      }

      // Store full user data + token
      const userData = {
        id: result.data.id,
        name: result.data.name,
        email: result.data.email,
        role: result.data.role,
        token: result.data.token,
      };

      setlogindata(userData);
      localStorage.setItem('userdata', JSON.stringify(userData));

      nav(userData.role === 'admin' ? '/admin' : '/');

    } catch (err) {
      seterror('Cannot reach server. Please try again.');
      console.error('Auth error:', err);
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

        {/* Error message */}
        {error && (
          <p style={{ color: 'red', fontSize: '13px', marginBottom: '10px', textAlign: 'center' }}>
            {error}
          </p>
        )}

        <form className={'loginForm'} onSubmit={handleSubmit}>

          {/* Name field — only shown during Register */}
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
            {loading ? 'Please wait...' : buttontext}
          </button>
        </form>

        {buttontext === 'Login' ? (
          <div className={'loginfooter'}>
            Don't have an account?{' '}
            <p onClick={() => { setbuttontext('Register'); seterror(''); }}>
              Register now
            </p>
          </div>
        ) : (
          <div className={'loginfooter'}>
            Already have an account?{' '}
            <p onClick={() => { setbuttontext('Login'); seterror(''); }}>
              Login
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Login;
