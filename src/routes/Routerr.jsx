import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Shop from "../pages/Shop";
import { Shopcontext } from "../hooks/shop-context";
import Hero from "../pages/Home";
import { useContext } from "react";
import CartDummy from "../pages/CartDummy";
import Checkout from "../pages/Checkout";

const Routerr = () => {
  const { showCart } = useContext(Shopcontext);
  return (
    <>
      <HashRouter>
        <Navbar />
        {showCart === true && <CartDummy />}
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/check' element={<Checkout />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default Routerr;
