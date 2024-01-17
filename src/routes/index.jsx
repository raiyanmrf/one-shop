import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Shop from "../pages/Shop";
import { Shopcontext } from "../hooks/shop-context";
import Hero from "../pages/Home";
import { useContext } from "react";
import CartDummy from "../components/CartDummy";
import Checkout from "../components/Checkout";
import ProductDetail from "../components/ProductDetail";

const Routerr = () => {
  const { showCart, showCheck } = useContext(Shopcontext);
  return (
    <>
      <HashRouter>
        <Navbar />
        {showCart === true && <CartDummy />}
        {showCheck === true && <Checkout />}
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/d' element={<ProductDetail />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default Routerr;
