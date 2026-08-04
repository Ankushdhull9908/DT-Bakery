import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import './UserPage.css';

const UserPage = () => {
  const { logindata, setlogindata } = useAppContext();
  const nav = useNavigate();
  const [activeTab, setActiveTab] = useState('orders');

  // Placeholder data - replace with your actual backend/context data
  const orders = [
    { id: '#BK-9921', date: 'Oct 12, 2023', status: 'Delivered', total: 450, items: 'Belgian Chocolate Cake x 1' },
    { id: '#BK-8842', date: 'Oct 15, 2023', status: 'Cancelled', total: 120, items: 'Butter Croissant x 2' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('userdata')
    setlogindata(null);
    nav('/');
  };

  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: '👤' },
    { id: 'orders', label: 'Orders', icon: '📦' },
    { id: 'addresses', label: 'Addresses', icon: '📍' },
  ];

  return (
    <div className="user-page">
      <div className="up-container">
        {/* Sidebar */}
        <aside className="up-sidebar">
          <div className="up-user-info">
            <div className="up-avatar">{logindata?.name?.charAt(0) || 'U'}</div>
            <h3>{logindata?.name || 'Guest User'}</h3>
            <p>{logindata?.email || 'user@example.com'}</p>
          </div>
          <nav className="up-nav">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`up-nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="up-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
            <button className="up-nav-item up-logout" onClick={handleLogout}>
              <span className="up-nav-icon">🚪</span> Logout
            </button>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="up-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'profile' && (
                <div className="up-view">
                  <h2 className="up-view-title">Profile Settings</h2>
                  <div className="up-card">
                    <div className="up-form-group">
                      <label>Full Name</label>
                      <input type="text" defaultValue={logindata?.name} />
                    </div>
                    <div className="up-form-group">
                      <label>Email Address</label>
                      <input type="email" defaultValue={logindata?.email} />
                    </div>
                    <button className="id-btn-cart" style={{ width: 'fit-content', padding: '12px 30px' }}>
                      Update Profile
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="up-view">
                  <h2 className="up-view-title">Order History</h2>
                  <div className="up-orders-list">
                    {orders.map((order) => (
                      <div key={order.id} className="up-order-card">
                        <div className="up-order-header">
                          <span className="up-order-id">{order.id}</span>
                          <span className={`up-status-tag ${order.status.toLowerCase()}`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="up-order-body">
                          <p><strong>Date:</strong> {order.date}</p>
                          <p><strong>Items:</strong> {order.items}</p>
                        </div>
                        <div className="up-order-footer">
                          <span>Total: ₹{order.total}</span>
                          <button className="up-view-btn">View Details</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div className="up-view">
                  <div className="up-header-flex">
                    <h2 className="up-view-title">Saved Addresses</h2>
                    <button className="up-add-btn">+ Add New</button>
                  </div>
                  <div className="up-card up-address-card">
                    <p className="up-address-tag">Home</p>
                    <p>123 Bakery Lane, Pastry District</p>
                    <p>New Delhi, 110001</p>
                    <div className="up-address-actions">
                      <button>Edit</button>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default UserPage;