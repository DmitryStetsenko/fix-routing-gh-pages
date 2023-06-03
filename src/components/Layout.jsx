import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <NavLink to="/" className="menu-item__link">Home</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="about" className="menu-item__link">About</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="contacts" className="menu-item__link">Contacts</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      
      <main>
        <Outlet />
      </main>

      <footer><h2>copyright 2023</h2></footer>
    </div>
  );
};

export default Layout;