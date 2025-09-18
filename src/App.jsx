import React from 'react'

import CarouselEffect from './Components/Carousel/CarouselEffect'
import Category from './Components/Category/Category'
import Product from './Components/Product/Product'
import Header from './Components/Header/Header'

const App = () => {
  return (
    <>
      <Header/>
      <CarouselEffect />
      <Category />
      <Product/>
      
    </>
  )
}

export default App
