import React, { useContext, useState } from 'react'
import useHttp from '../../hooks/use-http';

import styles from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from '../Checkout/Checkout';

const Cart = props => {
  const cartCtx = useContext(CartContext);
  const [goToCheckout, setGoToCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const { isLoading: isSubmitting, makeRequest } = useHttp();

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
  };
  const cartItemAddHandler = item => {
    const itemToAdd = {
      ...item,
      amount: 1
    }
    cartCtx.addItem(itemToAdd)
  };

  
  const placeOrder = userData => {
    makeRequest({
      url: 'https://react-practice-5c75e-default-rtdb.firebaseio.com/orders.json',
      method: 'POST',
      body: { 
        user: userData, 
        items: cartCtx.items,
        totalAmount: cartCtx.totalAmount,
      },
      headers: {'Content-Type': 'application/json'}
    })
    setDidSubmit(true);
    cartCtx.clearCart();
  };
  
  const cartItems = <ul className={styles['cart-items']}>{cartCtx.items.map(item => (
    <CartItem 
      key={item.id} 
      name={item.name} 
      amount={item.amount}
      price={item.price}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ))}</ul>;

  const modalActions = 
    <div className={styles.actions}>
      <button className={styles['button--alt']} onClick={props.closeCart}>Close</button>
      {hasItems && <button className={styles.button} onClick={setGoToCheckout.bind(null, true)}>Order</button>}
    </div>;

  const cartModalContent = 
  <>
    {!goToCheckout && cartItems}
    <div className={styles.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    {goToCheckout && <Checkout closeCheckout={setGoToCheckout.bind(null, false)} onSubmit={placeOrder} />}
    {!goToCheckout && modalActions}
  </>

  const isSubmittingModalContent = <p>Placing order...</p>

  const didSubmitModalContent = 
  <div className={styles.actions}>
    <p>Successfully placed Order!</p>
    <button className={styles['button--alt']} onClick={props.closeCart}>Close</button>
  </div>

  return (
    <Modal closeModal={props.closeCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )
}

export default Cart
