import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <Link to="/" className="menu__item-link">Home</Link>
            </li>
            <li className="menu-item">
              <Link to="about" className="menu__item-link">About</Link>
            </li>
            <li className="menu-item">
              <Link to="contacts" className="menu__item-link">Blog</Link>
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