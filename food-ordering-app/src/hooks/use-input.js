import { useState } from 'react'

const useInput = (validate) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validate(value);
  const hasError = !isValid && isTouched;

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onBlur = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  }

  return {
    value,
    isValid, 
    hasError,
    onChange,  
    onBlur,
    reset
  }
}

export default useInput
