//import in react style
//import { createStore } from 'redux';

//more powerful version of createReducer, creates a slice in redux state
//configureStore replaces combine reducers in order to combine slices in a store
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
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
  initialState,
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

//reducer with same logic as redux-demo
//reducers should never mutate the current state, but return a new one
// const counterReducer = (state = initialState, action) => {
//   if(action.type === "INCREASE"){
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     }
//   }
//   if(action.type === "INCREASE_MULTI"){
//     return {
//       counter: state.counter + action.payload,
//       showCounter: state.showCounter
//     }
//   }
//   if(action.type === "DECREASE"){
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     }
//   }
//   if(action.type === 'TOGGLE'){
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter
//     }
//   }
//   return state;
// }
 
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});
//to connect slices to store, a reducer object is created that contains a map of all reducers

//actions can be created automatically by redux toolkit using the actions property
//actions are methods in this case
export const counterActions = counterSlice.actions;

//make the store available for other components in the app
export default store;