import React, { useState } from "react";
import { FaCcVisa, FaCcPaypal, FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const Checkout = () => {
  const [visa, setvisa] = useState(false);
  const [master, setmaster] = useState(false);
  const [ame, setame] = useState(false);
  const [paypal, setpaypal] = useState(false);
  return (
    <form
      onSubmit={() => {
        alert("Are You Sure to Proceed");
      }}
      className='flex absolute z-40 bg-slate-50  top-0 right-0 gap-5
       py-8 justify-start items-start flex-col sm:flex-row max-w-[800px] px-8 h-[100vh] '
    >
      {/* Billing Address Section */}
      <div className='max-w-sm max-sm:w-[100%] mx-auto sm:w-1/2'>
        <h2 className='text-lg font-bold mb-4'>Billing Address</h2>
        <div>
          <label htmlFor='fullName' className='block mb-2'>
            Full Name
          </label>
          <input
            type='text'
            id='fullName'
            className='w-full mb-4 p-2 border'
            placeholder='John Doe'
            required
          />

          <label htmlFor='email' className='block mb-2'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            className='w-full mb-4 p-2 border'
            placeholder='john.doe@example.com'
            required
          />

          <label htmlFor='cityStateZip' className='block mb-2'>
            City, State, Zip Code
          </label>
          <input
            type='text'
            id='cityStateZip'
            className='w-full mb-4 p-2 border'
            placeholder='City, State, 12345'
            required
          />
        </div>
      </div>

      {/* Payment Section */}
      <div className='max-w-sm mx-auto sm:w-1/2'>
        <h2 className='text-lg font-bold mb-4'>Payment Section</h2>
        <div>
          <label htmlFor='cardType' className='block mb-2'>
            Accepted Card
          </label>
          <div className='flex space-x-4 mb-4'>
            <button
              className={`bg-transparent ${
                visa && `transform scale-125 text-green-600`
              }`}
              onClick={e => {
                e.preventDefault();
                setvisa(!visa);
                setmaster(false);
                setpaypal(false);
                setame(false);
              }}
            >
              <FaCcVisa alt='Visa' className='w-8 h-8' />
            </button>
            <button
              className={`bg-transparent ${
                master && `transform scale-125 text-green-600`
              }`}
              onClick={e => {
                e.preventDefault();
                setvisa(false);
                setmaster(!master);
                setpaypal(false);
                setame(false);
              }}
            >
              <FaCcMastercard alt='Mastercard' className='w-8 h-8' />
            </button>
            <button
              className={`bg-transparent ${
                ame === true && `transform scale-125 text-green-600`
              }`}
              onClick={e => {
                e.preventDefault();
                setvisa(false);
                setmaster(false);
                setpaypal(false);
                setame(!ame);
              }}
            >
              <SiAmericanexpress alt='American Express' className='w-8 h-8' />
            </button>
            <button
              className={`bg-transparent ${
                paypal && `transform scale-125 text-green-600`
              }`}
              onClick={e => {
                e.preventDefault();
                setvisa(false);
                setmaster(false);
                setpaypal(!paypal);
                setame(false);
              }}
            >
              <FaCcPaypal alt='PayPal' className='w-8 h-8' />
            </button>
          </div>

          <label htmlFor='nameOnCard' className='block mb-2'>
            Name on Card
          </label>
          <input
            type='text'
            id='nameOnCard'
            className='w-full mb-4 p-2 border'
            placeholder='John Doe'
            required
          />

          <div className='flex mb-4'>
            <div className='w-1/2 mr-2'>
              <label htmlFor='expMonth' className='block mb-2'>
                Exp Month
              </label>
              <input
                type='text'
                id='expMonth'
                className='w-full p-2 border'
                placeholder='MM'
                required
              />
            </div>

            <div className='w-1/2 ml-2'>
              <label htmlFor='expYearCVV' className='block mb-2'>
                Exp Year, CVV
              </label>
              <input
                type='text'
                id='expYearCVV'
                className='w-full p-2 border'
                placeholder='YY, CVV'
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Proceed to Checkout Button */}
      <div className='sm:absolute  sm:bottom-24'>
        <button
          className='bg-green-700 text-white py-2 px-4 rounded-full'
          type='submit'
        >
          Proceed to Checkout
        </button>
      </div>
    </form>
  );
};

export default Checkout;
