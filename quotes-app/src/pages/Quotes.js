import React from 'react'

import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Bas', text: 'React is fun'},
  {id: 'q2', author: 'David', text: 'Angular is not fun'},
]

const Quotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  )
}

export default Quotes