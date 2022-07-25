import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import React from 'react'
import Lander from "../pages/lander";
import BookOne from "../components/bookOne";
import HomeTest from "../pages/homeTest";
import OrderPlace from "../components/orderPlace";
import MycartwithHeader from "../pages/mycartwithHeader";
import Mywishlist from "../components/mywishlist";

function Router1() {
  return (
    <div>
           <Router>
             <Routes>
                 <Route exact path="/" element = {<Lander/>} />
                 <Route path ="/home" element = {<HomeTest/>} />
                 <Route path ="/bookOne" element = {<BookOne/>} />
                 <Route path="/mycart" element = {<MycartwithHeader/>} />
                 <Route path="/orderplaced" element = {<OrderPlace/>} />
                 <Route path="/wishlist" element = {<Mywishlist/>} />

             </Routes>
            </Router>
    </div>
  )
}

export default Router1