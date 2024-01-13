import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Shop from "../pages/Shop";
import { Shopcontext } from "../hooks/shop-context";
import Hero from "../pages/Home";
import { useContext } from "react";
import CartDummy from "../pages/CartDummy";
import Checkout from "../pages/Checkout";

const Routerr = () => {
  const { showCart, showCheck } = useContext(Shopcontext);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {showCart === true && <CartDummy />}
        {showCheck === true && <Checkout />}
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routerr;
