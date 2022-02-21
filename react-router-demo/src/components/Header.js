import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from "./Header.module.css";

//in order to take advantage of SPAs and not reload the page when redirecting
//links are used to prevent the default behavior and change the render client-side
//NavLink with help of the activeClassName, will automatically show the current tab in the navbar

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to={'/welcome'}>Welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to={'/products'}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header