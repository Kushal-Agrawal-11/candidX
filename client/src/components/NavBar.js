import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <h1>candid<span>X</span></h1>
      </Link>
      <ul>
        <li className={location.pathname === '/' ? styles.active : ''}><Link to="/">HOME</Link></li>
        <li className={location.pathname === '/categories' ? styles.active : ''}><Link to="/categories">CATEGORIES</Link></li>
        <li className={location.pathname === '/about' ? styles.active : ''}><Link to="/about">ABOUT</Link></li>
        <li className={location.pathname === '/login' ? styles.active : ''}><Link to="/login">LOGIN</Link></li>
        <li className={location.pathname === '/contact' ? styles.active : ''}><Link to="/contact">CONTACT</Link></li>
      </ul>

      <div className={styles['social-icons']}>
        <a href="https://facebook.com"><i className={`fab fa-facebook-f ${styles.icon}`}></i></a>
        <a href="https://twitter.com"><i className={`fab fa-twitter ${styles.icon}`}></i></a>
        <a href="https://instagram.com"><i className={`fab fa-instagram ${styles.icon}`}></i></a>
        <a href="https://pinterest.com"><i className={`fab fa-pinterest-p ${styles.icon}`}></i></a>
      </div>
    </nav>
  );
}

export default Navbar;
