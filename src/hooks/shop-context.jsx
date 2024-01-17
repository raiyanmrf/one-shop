import { createContext, useState } from "react";
import { PRODUCTS, hpa3 } from "../assets/Product";

export const Shopcontext = createContext(null);

const defaultShoppingCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopcontextProvider = props => {
  const [cartItems, setcartItems] = useState(defaultShoppingCart);
  const [showCart, setShowCart] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [bigImage, setbigImage] = useState(hpa3);
  const [smallImages, setSmallimages] = useState("hpa");
  const addTocart = itemId => {
    setcartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromcart = itemId => {
    setcartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItem = (newAmount, itemId) => {
    setcartItems(prev => ({ ...prev, [itemId]: newAmount }));
  };
  const delelteCartItem = itemId => {
    setcartItems(prev => ({ ...prev, [itemId]: 0 }));
  };
  const emptyCartItem = itemId => {
    setcartItems(defaultShoppingCart);
  };
  const addSubtotal = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const cartProducts = PRODUCTS.find(
          product => product.id === Number(item)
        );

        totalAmount += cartItems[item] * cartProducts.price;
      }
    }
    return totalAmount;
  };

  const value = {
    cartItems,
    addTocart,
    removeFromcart,
    updateCartItem,
    addSubtotal,
    bigImage,
    setbigImage,
    smallImages,
    setSmallimages,
    showCart,
    setShowCart,
    delelteCartItem,
    showCheck,
    setShowCheck,
    emptyCartItem,
  };

  return (
    <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
  );
};
