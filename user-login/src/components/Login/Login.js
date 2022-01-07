import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import classes from './Login.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const ctx = useContext(AuthContext)
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [emailState, dispatchEmail] = useReducer((state, action) => {
    if(action.type === 'USER_INPUT'){
      return {value: action.value, isValid: action.value.includes('@')}
    }
    if(action.type === 'INPUT_BLUR'){
      return {value: state.value, isValid: state.value.includes('@')}
    }
    return {value: '', isValid: false}
  }, {value: '', isValid: null})

  const [passwordState, dispatchPassword] = useReducer((state, action) => {
    if(action.type === 'USER_INPUT'){
      return {value: action.value, isValid: action.value.trim().length > 6}
    }
    if(action.type === 'INPUT_BLUR'){
      return {value: state.value, isValid: state.value.trim().length > 6}
    }
    return {value: '', isValid: false}
  }, {value: '', isValid: null})

  const { isValid: isEmailValid} = emailState;
  const { isValid: isPasswordValid} = passwordState;

  useEffect(()  => {
    const identifier = setTimeout(() => {
      setFormIsValid(isEmailValid && isPasswordValid);
    }, 500);

    return () => {clearTimeout(identifier)};
  }, [isEmailValid, isPasswordValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: 'USER_INPUT', value: event.target.value});

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // )
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_INPUT', value: event.target.value});

    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // )
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passwordState.isValid);
    } else if(!isEmailValid){
      emailInputRef.current.focus();
    } else{
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          ref={emailInputRef}
          id="email" 
          label="E-Mail" 
          type="email" 
          isValid={isEmailValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input 
          ref={passwordInputRef}
          id="password" 
          label="Password" 
          type="password" 
          isValid={isPasswordValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
