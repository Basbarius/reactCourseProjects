import { Route, Switch, Redirect } from 'react-router-dom';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Welcome from './pages/Welcome';
import Header from './components/Header';

//to use react-router, a browser-router must wrap the app component in index.js
//in order to register a route with react-router, Route component is used
//Route requieres a path and a component

//to dynamically declare routes for lists of content, a : is added following an identifier

//in order to avoid overlapping the routes, a Switch component is used so that only one component is rendered
//the first match will be rendered
//the exact prop helps to work around routes that have common roots

//The Redirect component helps to, as mentiond, redirect to a specific path

function App() {
  return (
    <div>
      <Header /> 
      <main>
        <Switch>
          <Route path={'/'} exact><Redirect to='/welcome'/></Route>
          <Route path={'/welcome'} component={Welcome}/>
          <Route path={'/products'} exact component={Products} />
          <Route path={'/products/:productId'} component={ProductDetail} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
