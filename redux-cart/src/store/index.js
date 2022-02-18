import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './reducers/cart';
import uiReducer from './reducers/ui';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer
  }
});

export default store;