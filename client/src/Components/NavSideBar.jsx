import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { icons } from '../assets/Assets'

function NavSideBar() {
    const { width, showmenu, setshowmenu, logindata, setlogindata } = useAppContext()

    const [showlogin, setshowlogin] = useState(false)
    const [buttontext, setbuttontext] = useState('Login')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const nav = useNavigate()

    // --- Logout Function ---
    const handleLogout = () => {
        setlogindata(null);
        localStorage.removeItem('userdata');
        alert("Logged out successfully");
        setshowmenu(false);
        nav('/');
    };

    function submitForm(e) {
        e.preventDefault(); 

        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }

        if (buttontext === 'Register') {
            const data = { email: email, role: 'user' }; // Defined before use
            setlogindata(data);
            localStorage.setItem('userdata', JSON.stringify(data));
            alert('Registration Successful!');
            setshowmenu(false);
            return;
        }

        if (email === 'user@gmail.com' && password === '123') {
            const data = { email: email, role: 'user' };
            setlogindata(data);
            localStorage.setItem('userdata', JSON.stringify(data));
            alert('Login successful');
            setshowmenu(false);
        } else if (email === "admin@gmail.com" && password === '123') {
            const data = { email: email, role: 'admin' };
            setlogindata(data);
            localStorage.setItem('userdata', JSON.stringify(data));
            alert('Admin Login successful');
            setshowmenu(false);
        } else {
            alert('Wrong email or password');
        }
    }

    return (
        <div className="navsidebar" style={{ left: width < 600 && showmenu ? '0' : '-100vw' }}>

            <div className="menuandlogin">
                <div className="menubox" onClick={() => setshowlogin(false)} 
                     style={{ backgroundColor: !showlogin ? 'black' : 'white', color: !showlogin ? 'white' : 'black' }}>
                    <img src={icons.hamburger} alt='hamburger' />
                    <p>Menu</p>
                </div>

                {logindata === null && (
                    <div className="menubox" onClick={() => setshowlogin(true)}
                        style={{ backgroundColor: showlogin ? "black" : "white", color: showlogin ? "white" : "black" }}>
                        <img src={icons.user} alt="user" />
                        <p>Login</p>
                    </div>
                )}
            </div>

            {showlogin && !logindata ? (
                <div className={'loginContainer'}>
                    <h1 className={'logo'}>DT Bakery</h1>
                    <hr className={'divider'} />
                    {buttontext === "Login" && <p className={'subtitle'}>Great to have you back!</p>}

                    <form className={'loginForm'} onSubmit={submitForm}>
                        <div className={'inputGroup'}>
                            <input type="email" placeholder="Email address" required value={email} onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className={'inputGroup'}>
                            <input type="password" placeholder="Password" required value={password} onChange={(e) => setpassword(e.target.value)} />
                        </div>

                        {buttontext === 'Login' && (
                            <a href="#forgot" className={'forgotPassword'}>Forgot your password?</a>
                        )}

                        <button type="submit" className={'loginButton'}>
                            {buttontext}
                        </button>
                    </form>

                    <div className={'loginfooter'}>
                        {buttontext === "Login" ? (
                            <>Don't have an account? <p onClick={() => setbuttontext('Register')}>Register now</p></>
                        ) : (
                            <>Already Have an Account? <p onClick={() => setbuttontext('Login')}>Login</p></>
                        )}
                    </div>
                </div>
            ) : (
                <ul>
                    <li onClick={() => { nav('/'); setshowmenu(false); }}>
                        <p>Home</p>
                        <div className="leftarrows"><img src={icons.rightarrow} alt='right' /></div>
                    </li>
                    <li onClick={() => { nav('/aboutus'); setshowmenu(false); }}>
                        <p>About Us</p>
                        <div className="leftarrows"><img src={icons.rightarrow} alt='right' /></div>
                    </li>
                    <li onClick={() => { nav('/cart'); setshowmenu(false); }}>
                        <p>Cart</p>
                        <div className="leftarrows"><img src={icons.rightarrow} alt='right' /></div>
                    </li>
                    
                    {logindata ? (
                        <>
                            <li onClick={() => { nav('/user'); setshowmenu(false); }}>
                                <p>Profile</p>
                                <div className="leftarrows"><img src={icons.rightarrow} alt='right' /></div>
                            </li>
                            <li onClick={handleLogout} className="logout-li">
                                <p style={{color: 'red'}}>Logout</p>
                                <div className="leftarrows"><img src={icons.rightarrow} alt='right' /></div>
                            </li>
                        </>
                    ) : (
                        <li onClick={() => setshowlogin(true)}>
                            <p>Login / Register</p>
                            <div className="leftarrows"><img src={icons.rightarrow} alt='right' /></div>
                        </li>
                    )}
                </ul>
            )}

            <div className="closebtn" onClick={() => setshowmenu(false)}>
                <p>close</p>
            </div>
        </div>
    )
}

export default NavSideBar;