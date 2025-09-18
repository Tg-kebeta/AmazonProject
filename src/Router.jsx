import { Payment } from '@mui/icons-material';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/LandingPage/LandingPage';
import SignIn from './pages/Auth/Signup';
import Payment from './pages/Auth/Payment/Payment';
import Orders from './pages/Auth/Orders/Orders';
import Cart from './pages/Auth/Cart/Cart';
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ auth" element={<SignIn />} />
        <Route path="/ payments" element={<Payment />} />
        <Route path="/ orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;