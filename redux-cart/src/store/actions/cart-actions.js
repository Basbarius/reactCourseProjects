import { uiActions } from "../reducers/ui";
import { cartActions } from "../reducers/cart";

/*action creators follow the thunk pattern
here, sideffects like async calls for redux state changes happen without involving
the reducers, since they must be synchronous
an action creator returns a new function with dispatch as parameter, which handles the side effect
the dispatch function may be used to trigger reducers to change redux state*/ 
export const fetchCartData = () => {
  return async (dispatch) => {
    //to perform http calls, an async function is created to make the request
    const fetchRequest = async () => {
      const response = await fetch(
        "https://react-practice-5c75e-default-rtdb.firebaseio.com/cart.json"
      );
      if(!response.ok){
        throw new Error("Fetching Cart failed")
      }

      const data = response.json()
      return data;
    };

    //error handling is made through try and catch blocks due to async await
    try{
      const cartData = await fetchRequest();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }));
    } catch(error){
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-practice-5c75e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending data cart failed!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
