//import in react style
import { createStore } from 'redux';

const initialState = {
  counter: 0, 
  showCounter: true
};

//reducer with same logic as redux-demo
const counterReducer = (state = initialState, action) => {
  if(action.type === "INCREASE"){
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }
  if(action.type === "INCREASE_MULTI"){
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter
    }
  }
  if(action.type === "DECREASE"){
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }
  if(action.type === 'TOGGLE'){
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    }
  }
  return state;
}

const store = createStore(counterReducer);

//make the store available for other components in the app
export default store;