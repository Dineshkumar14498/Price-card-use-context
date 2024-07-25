
import React from 'react'
import Header from './Header'
import Product from "./Product"
import Poster from './Poster'

//Home Component to display all products
const Home = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Poster />
                <Product />
            </div>
        </>
    )
}

export default Home
