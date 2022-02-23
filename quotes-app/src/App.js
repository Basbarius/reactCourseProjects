import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import Quotes from "./pages/Quotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from './pages/NotFound';

//path='*' matches all possible paths. This is usually used for not found pages since it is located after all other routes

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/"><Redirect to="/quotes"/></Route>
          <Route exact path='/quotes' component={Quotes}/>
          <Route path='/quotes/:quoteId' component={QuoteDetail}/>
          <Route exact path='/new-quote'component={NewQuote}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
