import React, { useContext } from 'react'

import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);

  const numberOfItemsInCart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)

  return (
    <button className={styles.button} onClick={props.openCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItemsInCart}</span>
    </button>
  )
}

export default HeaderCartButton
