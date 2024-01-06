import React, { useContext } from "react";
import { PRODUCTS } from "../assets/Product";
import { Shopcontext } from "../hooks/shop-context";
import CartItems from "../components/CartItems";
import { ShoppingBagOpen } from "phosphor-react";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, addSubtotal } = useContext(Shopcontext);
  const totalAmount = addSubtotal();
  const navigate = useNavigate();
  return (
    <main className='flex flex-col items-center justify-center py-1'>
      <h2 className='text-3xl font-bold'>Your Cart Items</h2>
      <div className='flex flex-wrap gap-7 p-3 items-center justify-center'>
        {PRODUCTS &&
          PRODUCTS.map(product => {
            if (cartItems[product.id] !== 0) {
              return <CartItems key={product.id} product={product} />;
            }
          })}
      </div>
      {totalAmount > 0 ? (
        <div className='flex flex-col gap-5 justify-center items-center'>
          <p className='text-xl font-semibold'>Subtotal:{totalAmount} $</p>
          <div className='flex gap-3'>
            <button
              onClick={() => {
                navigate("/shop");
              }}
              className='px-3 py-2 font-semibold text-center  border-2  hover:bg-white  hover:text-black bg-black text-white'
            >
              Continue shopping
            </button>
            <button className='px-3 py-2 font-semibold text-center  border-2  hover:bg-white  hover:text-black bg-black text-white'>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className='border shadow-2xl w-[310px] h-[50px] flex justify-center items-center'>
          <p className='flex justify-between gap-3 items-center'>
            Your Cart is Empty
            <ShoppingBagOpen />
          </p>
        </div>
      )}
    </main>
  );
};

export default Cart;
