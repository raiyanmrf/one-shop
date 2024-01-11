import React from "react";
import { BrowserRouter, Routes, Route,HashRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import { ShopcontextProvider } from "../hooks/shop-context";
import Hero from "../pages/Home";
const Routerr = () => {
  return (
    <>
      <HashRouter>
        <ShopcontextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </ShopcontextProvider>
      </HashRouter>
    </>
  );
};

export default Routerr;
