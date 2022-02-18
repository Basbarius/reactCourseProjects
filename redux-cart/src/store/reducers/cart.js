import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  hasChanged: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action){
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
      }
      state.totalQuantity += 1;
      state.hasChanged = true;
    },
    removeFromCart(state, action) {
      const itemToRemoveId = action.payload;
      const existingItem = state.items.find(item => item.id === itemToRemoveId)
      if (existingItem.quantity === 1){
        state.items = state.items.filter(item => item.id !== itemToRemoveId);
      } else{
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity -= 1;
      state.hasChanged = true;
    },
  },
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
