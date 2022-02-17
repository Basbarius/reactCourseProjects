const redux = require("redux"); // redux import in nodejs

//a reducer that is used to modify the state inside the store
//a reducer takes in the previous state and an action
//a reducer returns the new state
//the reducer should also specify the initial state, since the reducer will be run when creating the store
//the initial state is {counter: 0}
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement'){
    return {
      counter: state.counter - 1,
    };
  }
  return state; //default state
};

//creates a store and takes reducers as input
const store = redux.createStore(counterReducer);

//a function that will serve as an example to access the store
//store.getState() returns the latest snapshot of the store state
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//using store.subscribe will notify redux which components to rerender when changes in state happen
store.subscribe(counterSubscriber);

//use dispatch to pass an action to the store, which will be handled by the reducer
//this will rerun the reducer, which will in turn set the counter to 1
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
