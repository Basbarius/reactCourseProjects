import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { uiActions } from '../../store/reducers/ui';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const totalAmount = useSelector(state => state.cart.totalQuantity);

  const cartButtonHandler = () => {
    dispatch(uiActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
