import useInput2 from "../hooks/use-input-try";

const BasicForm = () => {
  const {
    value: enteredFirstName,
    isValid: isFirstNameValid,
    hasError: firstNameHasError,
    onChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput2((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: isLastNameValid,
    hasError: lastNameHasError,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput2((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: isEmailValid,
    hasError: emailHasError,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput2((value) => value.includes('@'));

  const firstNameStyles = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameStyles = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailStyles = emailHasError ? 'form-control invalid' : 'form-control';

  const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid;

  const submitHandler = event => {
    event.preventDefault();

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail)
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameStyles}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && <p>Please enter a firstname</p>}
        </div>
        <div className={lastNameStyles}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && <p>Please enter a lastname</p>}
        </div>
      </div>
      <div className={emailStyles}>
        <label htmlFor="name">E-Mail Address</label>
        <input
            type="text"
            id="name"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailHasError && <p>Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
