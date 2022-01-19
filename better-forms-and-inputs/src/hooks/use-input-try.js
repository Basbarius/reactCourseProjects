import { useReducer } from 'react'

const initialState = {
  value: '',
  isTouched: false
}

const inputReducer = (state, action) => {
  if(action.type === 'ON_CHANGE'){
    return {value: action.value, isTouched: state.isTouched};
  }
  if(action.type === 'ON_BLUR'){
    return {isTouched: true, value: state.value};
  }
  if(action.type === 'RESET'){
    return {value: '', isTouched: false};
  }
  return initialState
}

const useInput2 = (validate) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState)

  const isValid = validate(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const onChangeHandler = event => {
    dispatch({ type: 'ON_CHANGE', value: event.target.value})
  }

  const onBlurHandler = event => {
    dispatch({ type: 'ON_BLUR'})
  }

  const reset = () => {
    dispatch({ type: 'RESET'})
  }

  return {
    value: inputState.value,
    isValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset
  }
}

export default useInput2
