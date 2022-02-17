//import in react style
//import { createStore } from 'redux';

//more powerful version of createReducer, creates a slice in redux state
//configureStore replaces combine reducers in order to combine slices in a store
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducers/counter';
import authReducer from './reducers/auth';

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
    counter: counterReducer,
    auth: authReducer
  }
});
//to connect slices to store, a reducer object is created that contains a map of all reducers

//make the store available for other components in the app
export default store;