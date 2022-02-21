import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  //to assign the keys to the pages, the useParams hook is employed
  const params = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  )
}

export default ProductDetail