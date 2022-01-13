import React from 'react'

import styles from './Header.module.css'
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton openCart={props.openCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} />
      </div>
    </>
  )
}

export default Header
