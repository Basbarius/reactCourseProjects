import React from 'react'
import { Route } from 'react-router-dom'

//routes can also be defined outside the app component if the root is the same
//these are nested routes, which can render content conditionally on the url

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome new user!</p>
      </Route>
    </section>
  )
}

export default Welcome