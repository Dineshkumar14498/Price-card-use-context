import React, { useContext } from 'react'
import Card from './Card'
import Mycontext from './Mycontext';

//ProductsContainer Component
const ProductsContainer = ({ setProductcount }) => {
  const {productsData} = useContext(Mycontext);
  return (
    <div className="row product-container g-0 d-flex justify-content-center">
      {
        productsData.products.map((product,index) => (
          <Card key={index} product={product} />
        ))
      }
    </div>
  )
}

export default ProductsContainer