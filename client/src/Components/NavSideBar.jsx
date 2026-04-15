import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { icons } from '../assets/Assets'
import './NavSideBar.css' // Ensure you have the CSS file linked

function NavSideBar() {
    const { width, showmenu, setshowmenu, logindata, setlogindata } = useAppContext()

    const [showlogin, setshowlogin] = useState(false)
    const [buttontext, setbuttontext] = useState('Login')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const nav = useNavigate()

    const handleLogout = () => {
        setlogindata(null);
        localStorage.removeItem('userdata');
        setshowmenu(false);
        nav('/');
    };

    function submitForm(e) {
        e.preventDefault(); 
        if (!email || !password) return;

        // Mock Login Logic
        const role = email.includes('admin') ? 'admin' : 'user';
        const data = { email, role };
        setlogindata(data);
        localStorage.setItem('userdata', JSON.stringify(data));
        setshowmenu(false);
    }

    const menuLinks = [
        { name: 'Home', path: '/', icon: '🏠' },
        { name: 'Our Menu', path: '/menu', icon: '🍰' },
        { name: 'About Us', path: '/aboutus', icon: '✨' },
        { name: 'Cart', path: '/cart', icon: '🛒' },
    ];

    return (
        <div className="nsb-sidebar" style={{ left: width < 600 && showmenu ? '0' : '-100vw' }}>
            
            <div className="nsb-header">
                <div 
                    className={`nsb-tab ${!showlogin ? 'nsb-tab-active' : ''}`} 
                    onClick={() => setshowlogin(false)}
                >
                    <span>Menu</span>
                </div>
                {!logindata && (
                    <div 
                        className={`nsb-tab ${showlogin ? 'nsb-tab-active' : ''}`} 
                        onClick={() => setshowlogin(true)}
                    >
                        <span>Login</span>
                    </div>
                )}
            </div>

            <div className="nsb-body">
                {showlogin && !logindata ? (
                    <div className={'nsb-login-box'}>
                        <h2 className='nsb-title'>DT Bakery</h2>
                        <form className={'nsb-form'} onSubmit={submitForm}>
                            <input type="email" placeholder="Email" required value={email} onChange={(e) => setemail(e.target.value)} />
                            <input type="password" placeholder="Password" required value={password} onChange={(e) => setpassword(e.target.value)} />
                            <button type="submit" className={'nsb-submit'}>{buttontext}</button>
                        </form>
                        <p className="nsb-switch" onClick={() => setbuttontext(buttontext === 'Login' ? 'Register' : 'Login')}>
                            {buttontext === 'Login' ? "New here? Register" : "Have an account? Login"}
                        </p>
                    </div>
                ) : (
                    <div className="nsb-menu-list">
                        <p className="nsb-section-label">Navigation</p>
                        {menuLinks.map((link) => (
                            <div key={link.name} className="nsb-link-item" onClick={() => { nav(link.path); setshowmenu(false); }}>
                                <span className="nsb-link-icon">{link.icon}</span>
                                <span className="nsb-link-text">{link.name}</span>
                                <img src={icons.rightarrow} className="nsb-link-arrow" alt='arrow' />
                            </div>
                        ))}

                        <p className="nsb-section-label nsb-mt">Account</p>
                        {logindata ? (
                            <>
                                <div className="nsb-link-item" onClick={() => { nav('/user'); setshowmenu(false); }}>
                                    <span className="nsb-link-icon">👤</span>
                                    <span className="nsb-link-text">My Profile</span>
                                    <img src={icons.rightarrow} className="nsb-link-arrow" alt='arrow' />
                                </div>
                                <div className="nsb-link-item nsb-logout" onClick={handleLogout}>
                                    <span className="nsb-link-icon">🚪</span>
                                    <span className="nsb-link-text">Logout</span>
                                </div>
                            </>
                        ) : (
                            <div className="nsb-link-item" onClick={() => setshowlogin(true)}>
                                <span className="nsb-link-icon">🔑</span>
                                <span className="nsb-link-text">Login / Register</span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="nsb-close-area" onClick={() => setshowmenu(false)}>
                <span>Close Menu ×</span>
            </div>
        </div>
    )
}

export default NavSideBar;