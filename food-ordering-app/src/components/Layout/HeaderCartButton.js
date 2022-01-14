import React, { useContext, useEffect, useState } from 'react'

import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfItemsInCart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)

  const buttonStyles = `${styles.button} ${buttonIsHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if(cartCtx.items.length === 0){
      return;
    }
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {setButtonIsHighlighted(false)}, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={buttonStyles} onClick={props.openCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItemsInCart}</span>
    </button>
  )
}

export default HeaderCartButton
