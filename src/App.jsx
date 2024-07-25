import React, { useState } from 'react'
import './App.css'
import productsData from "./Product.json"
import Mycontext from './Components/Mycontext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Deliverycart from './Components/Deliverycart'

const App = () => {
 
  //state for product count
  const [productCount, setProductCount] = useState(0);
  //state for addedProducts
  const [addedProducts, setAddedProducts] = useState([]);

  //function to add selected products to cart
  const addProductToCart = (product) => {
    setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
  }

  //function to remove products from cart
  const removeProductFromCart = (id) => {
    setAddedProducts(addedProducts.filter(product => product.id != id));
  }

  //function to update product quantity
  const updateProductQuantity = (quantity,id) => {
    setAddedProducts(addedProducts.map(product => (
         product.id == id ? {...product,quantity} : product
    )))
  }

  //function to update btn status
  const editBtnStatus = (status,id) => {
    setAddedProducts(addedProducts.map(product => (
      product.id == id ? { ...product, status } : product
    )))  
  }
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/deliverycart',
      element: <Deliverycart/>
    }
  ]);
  return (
    <>
      <Mycontext.Provider value={{
        productsData,
        productCount,
        setProductCount,
        setAddedProducts,
        addProductToCart,
        removeProductFromCart,
        updateProductQuantity,
        editBtnStatus,
        addedProducts
      }}>
        <RouterProvider router={router} />

      </Mycontext.Provider>
    </>
  )
}

export default App