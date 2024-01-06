import React, { useContext } from "react";
import { Shopcontext } from "../hooks/shop-context";

const CartItems = ({ product }) => {
  const { cartItems, addTocart, removeFromcart, updateCartItem } =
    useContext(Shopcontext);

  return (
    <div
      key={product.id}
      className='flex flex-col gap-5  w-[300px] h-[400px] items-center justify-center'
    >
      <img width={"200px"} src={product.productImage} alt='?' />
      <h3 className='text-[18px] font-semibold'>{product.productName}</h3>
      <p>{product.price}$</p>

      <div>
        {" "}
        <button
          onClick={() => addTocart(product.id)}
          className='px-3  border-2 bg-white text-black hover:bg-black hover:text-white'
        >
          +
        </button>
        <input
          type='text'
          className='px-3 w-[50px] border-2 text-center bg-white text-black hover:bg-black hover:text-white'
          value={cartItems[product.id]}
          onChange={e => {
            updateCartItem(Number(e.target.value), product.id);
          }}
        />
        <button
          onClick={() => removeFromcart(product.id)}
          className='px-3  border-2 bg-white text-black hover:bg-black hover:text-white'
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartItems;
