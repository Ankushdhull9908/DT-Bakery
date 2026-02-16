import React from 'react';
import './AdminPage.css';
import { useAppContext } from '../context/AppContext';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

const AdminPage = () => {
  // Mock data for the dashboard
  const {setlogindata} =useAppContext()
  const nav=useNavigate()
  
  function logout()
  {
    setlogindata(null)
    localStorage.removeItem('userdata')
    setTimeout(()=>{
        nav('/')
    },1000)
  }

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">CORE<span>ADMIN</span></div>
        <nav className="nav-menu" >
          <a href="#" className="active" onClick={()=>nav('admindashboard')}>Dashboard</a>
          <a href="#" onClick={()=> nav('adminmanageproduct')}>Manage Products</a>
          <a href="#">Users</a>
          <a href="#">Settings</a>
          <a href="#" onClick={()=>logout()} style={{backgroundColor:'red',color:'white'}}>Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      
      <Outlet/>
    </div>
  );
};

export default AdminPage;