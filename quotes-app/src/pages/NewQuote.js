import React from 'react'
import { useHistory } from 'react-router-dom'

import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const history = useHistory();
  
  const addQuoteHandler = quoteData => {
    console.log(quoteData);

    //using the useHistory hook, it is possible to redirect programatically to any page
    history.push('/quotes');
  }
  
  return (
    <QuoteForm onAddQuote={addQuoteHandler}/>
  )
}

export default NewQuote