import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/actions/cart-actions"

let isInitial = true

function App() {
  const showCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  //one way of making async calls to the database with redux, is to use useEffect to send requests
  //after changing the redux store state, the App component will be rerendered, which will trigger useEffect
  useEffect(() => {
    if(isInitial){
      isInitial = false;
      return;
    }
    if(cart.hasChanged){
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
