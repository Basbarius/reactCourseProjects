import React, { useContext } from "react";
import useInput from "../../hooks/use-input";
import useHttp from "../../hooks/use-http";
import CartContext from "../../store/cart-context";

import styles from "./Checkout.module.css";
import Modal from "../UI/Modal";

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);
  const {makeRequest} = useHttp();
  const {
    value: inputName,
    isValid: inputNameIsValid,
    hasError: inputNameHasError,
    onChange: inputNameChangeHandler,
    onBlur: inputNameBlurHandler,
    reset: inputNameReset,
  } = useInput(value => value.trim() !== "");
  const {
    value: inputStreet,
    isValid: inputStreetIsValid,
    hasError: inputStreetHasError,
    onChange: inputStreetChangeHandler,
    onBlur: inputStreetBlurHandler,
    reset: inputStreetReset,
  } = useInput(value => value.trim() !== "");
  const {
    value: inputZipCode,
    isValid: inputZipCodeIsValid,
    hasError: inputZipCodeHasError,
    onChange: inputZipCodeChangeHandler,
    onBlur: inputZipCodeBlurHandler,
    reset: inputZipCodeReset,
  } = useInput(value => value.trim() !== "");
  const {
    value: inputCity,
    isValid: inputCityIsValid,
    hasError: inputCityHasError,
    onChange: inputCityChangeHandler,
    onBlur: inputCityBlurHandler,
    reset: inputCityReset,
  } = useInput(value => value.trim() !== "");

  const nameStyles = inputNameHasError ? `${styles.control} ${styles.invalid}` : styles.control;
  const streetStyles = inputStreetHasError ? `${styles.control} ${styles.invalid}` : styles.control
  const zipCodeStyles = inputZipCodeHasError ? `${styles.control} ${styles.invalid}` : styles.control
  const cityStyles = inputCityHasError ? `${styles.control} ${styles.invalid}` : styles.control

  const formIsValid = inputNameIsValid && inputStreetIsValid && inputZipCodeIsValid && inputCityIsValid;

  const submitHandler = event => {
    event.preventDefault();
    if (!formIsValid){
      return;
    }

    const body = {
      items: cartCtx.items,
      totalAmount: cartCtx.totalAmount,
      name: inputName,
      street: inputStreet,
      zipCode: inputZipCode,
      city: inputCity
    }

    makeRequest({
      url: 'https://react-practice-5c75e-default-rtdb.firebaseio.com/orders.json',
      method: 'POST',
      body,
      headers: {'Content-Type': 'application/json'}
    })

    inputNameReset();
    inputStreetReset();
    inputZipCodeReset();
    inputCityReset();
    props.closeCheckout();
  };

  return (
    <Modal closeModal={props.closeCheckout}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={nameStyles}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={inputName}
            onChange={inputNameChangeHandler}
            onBlur={inputNameBlurHandler}
          />
        </div>
        <div className={streetStyles}>
          <label htmlFor="name">Street</label>
          <input
            type="text"
            value={inputStreet}
            onChange={inputStreetChangeHandler}
            onBlur={inputStreetBlurHandler}
          />
        </div>
        <div className={zipCodeStyles}>
          <label htmlFor="name">ZipCode</label>
          <input
            type="text"
            value={inputZipCode}
            onChange={inputZipCodeChangeHandler}
            onBlur={inputZipCodeBlurHandler}
          />
        </div>
        <div className={cityStyles}>
          <label htmlFor="name">City</label>
          <input
            type="text"
            value={inputCity}
            onChange={inputCityChangeHandler}
            onBlur={inputCityBlurHandler}
          />
        </div>
        <div className={styles.actions}>
          <button onClick={props.closeCheckout}>Cancel</button>
          <button type="submit" className={styles.submit} disabled={!formIsValid}>
            Pay
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Checkout;
