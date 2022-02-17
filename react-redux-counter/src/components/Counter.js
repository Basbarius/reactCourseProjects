//useSelector is a hook that grants access to a part of the redux store
//useDispatch allows a component to dispatch actions to a redux store
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  //here a function is passed which will tell what part of the store wants to be accessed to
  //this hook also subscribes the component to the store, so if the state changes, this will rerender
  //this is the hook equivalent of mapStateToProps
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  //useDispatch is called without arguments and will return a dispatch function
  //this is the hook equivalent of mapDispatchToProps
  const dispatch = useDispatch();

  //actions can be passed through the dispatch function, just make sure to use the same action type
  const incrementHandler = () => {
    dispatch({ type: 'INCREASE'});
  };

  //a payload can be added to provide data to the reducer in order to perform a state change
  const incrementMultiHandler = () => {
    dispatch({ type: 'INCREASE_MULTI', payload: 5});
  };

  const decrementHandler = () => {
    dispatch({ type: 'DECREASE'});
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementMultiHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
