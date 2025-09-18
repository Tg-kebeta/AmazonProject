// import React from 'react'
// // import Routing from './Router';

// import CarouselEffect from './Components/Carousel/CarouselEffect'
// import Category from './Components/Category/Category'
// import Product from './Components/Product/Product'
// import Header from './Components/Header/Header'
// import { Carousel } from 'react-responsive-carousel'

// const App = () => {
//   return (
//     <>
     
//        <Header/>
//       <Carousel />
//       <Category />
//       <Product/> 
        
//     </>
//   )
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing/Landing';
import SignIn from "./Pages/Auth/Signup";
import Payment from "./Pages/Payment/Payment";
import Cart from "./Pages/Cart/Cart";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;

