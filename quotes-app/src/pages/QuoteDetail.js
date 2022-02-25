import React from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Bas', text: 'React is fun'},
  {id: 'q2', author: 'David', text: 'Angular is not fun'},
]

const QuoteDetail = () => {
  //useRouteMatch provides more information than useparams and useLocation, can be used to describe paths dynamically
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if(!quote){
    return <p>No quote found</p>
  }
  
  //use links to travel to nested routes and play with them
  //match.path gives the route with placeholders, while match.url gives the exact value, this is better for links
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route exact path={`${match.path}`}>
        <div className="centered">
          <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route exact path={`${match.path}/comments`} component={Comments} />
    </>
  )
}

export default QuoteDetail