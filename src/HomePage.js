import React, { useState } from "react";
import Home from './components/HomePage';
import Product from './components/ProductPage';
import About from './components/AboutUs';
import ContactPage from './components/Contact';
import logo from './assets/logo.png';
import './Homepage.css';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="admin-container">
      <div className="menu-container">
        <div className="left-menu">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="right-menu">
          <nav className="sidebar">
            <ul className="nav-links">
              <button className='buttonStyle' onClick={() => setActiveSection('home')}>Home</button>
              <button className='buttonStyle' onClick={() => setActiveSection('products')}>Products</button>
              <button className='buttonStyle' onClick={() => setActiveSection('contact')}>Contact</button>
              <button className='buttonStyle' onClick={() => setActiveSection('aboutus')}>AboutUs</button>
            </ul>
          </nav>
        </div>
      </div>
      <div className="admin-dashboard">
        <header className="dashboard-header">
          {/* Add any header content here */}
        </header>
        {activeSection === 'home' && <Home />}
        {activeSection === 'products' && <Product />}
        {activeSection === 'contact' && <ContactPage />}
        {activeSection === 'aboutus' && <About />}
        
        {/* Footer */}
        <div className='footer'>
          <p>© 2023 Gyrating Associates. All rights reserved.</p>
          <p>Registered Address: 123 Company Street, Cityville, Country</p>
          <p>+61 123456789</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
