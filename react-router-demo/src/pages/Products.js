import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to='products/b1'>Book 1</Link>
        </li>
        <li>
          <Link to='products/b2'>Book 2</Link>
        </li>
        <li>
          <Link to='products/b3'>Book 3</Link>
        </li>
      </ul>
    </section>
  )
}

export default Products