import React from 'react'
import { useParams, Route } from 'react-router-dom'

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Bas', text: 'React is fun'},
  {id: 'q2', author: 'David', text: 'Angular is not fun'},
]

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if(!quote){
    return <p>No quote found</p>
  }
  
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route exact path={`/quotes/${params.quoteId}/comments`} component={Comments} />
    </>
  )
}

export default QuoteDetail