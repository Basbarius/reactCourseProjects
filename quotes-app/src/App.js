import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import Quotes from "./pages/Quotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout"

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/"><Redirect to="/quotes"/></Route>
          <Route exact path='/quotes' component={Quotes}/>
          <Route path='/quotes/:quoteId' component={QuoteDetail}/>
          <Route exact path='/new-quote'component={NewQuote}/>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
