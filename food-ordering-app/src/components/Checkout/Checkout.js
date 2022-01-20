import React from 'react'

import styles from './Checkout.module.css';
import Modal from '../UI/Modal';

const Checkout = (props) => {
  return (
    <Modal closeModal={props.closeCheckout}>
      <form className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="name">Name</label>
          <input type="text" />
        </div>
        <div className={styles.actions}>
          <button onClick={props.closeCheckout}>Cancel</button>
          <button type="submit" className={styles.submit}>Pay</button>
        </div>
      </form>
    </Modal>
  )
}

export default Checkout
