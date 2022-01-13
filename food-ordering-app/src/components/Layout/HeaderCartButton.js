import React from 'react'

import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = props => {
  return (
    <button className={styles.button} onClick={props.openCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span  className={styles.badge}>Free</span>
    </button>
  )
}

export default HeaderCartButton
