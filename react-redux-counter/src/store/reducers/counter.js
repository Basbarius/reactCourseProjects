import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0, 
  showCounter: true
};

//a redux state slice has a name and initial state, which returns a piece of state
//a slice also needs reducers
/*instead of writing if or case statement in a reducer, several reducers are declared with 
their own logic in order to reduce boiler plate code*/
//slice reducers can mutate state since the library will correct it behind the scenes
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

export default counterSlice.reducer;

//actions can be created automatically by redux toolkit using the actions property
//actions are methods in this case
export const counterActions = counterSlice.actions;