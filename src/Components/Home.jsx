
import React from 'react'
import Header from './Header'
import ProductsContainer from './Productscontainer'
import Poster from './Poster'

//Home Component to display all products
const Home = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Poster />
                <ProductsContainer />
            </div>
        </>
    )
}

export default Home
