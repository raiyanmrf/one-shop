import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import { ShopcontextProvider } from "../hooks/shop-context";
import Hero from "../pages/Hero";
const Routerr = () => {
  return (
    <>
      <BrowserRouter>
        <ShopcontextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </ShopcontextProvider>
      </BrowserRouter>
    </>
  );
};

export default Routerr;
