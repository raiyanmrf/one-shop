import React from "react";

const Checkout = () => {
  return (
    <main className='h-[100vh] drop-shadow-xl flex justify-center items-center container'>
      <section
        className='
    h-[100vh] w-full md:w-[650px]  mt-[150px] border place-items-center p-2'
      >
        <form className='flex  flex-col gap-10'>
          <label htmlFor=''>
            Email: <input className='max-w-[400px]' type='email' required />
          </label>
          <label className='flex flex-col'>
            Card Information <input className='max-w-[400px]' type='text' />
            <span className='flex'>
              <input className='max-w-[200px]' type='text' />{" "}
              <input className='max-w-[200px]' type='text' />
            </span>
          </label>

          <label htmlFor=''>
            Name on card: <input className='max-w-[400px]' type='text' />
          </label>
          <label htmlFor=''>
            Country or region:{" "}
            <select name='' id=''>
              <option value='USA'>USA</option>
              <option value='UK'>UK</option>
              <option value='UAE'>UAE</option>
              <option value='Ind'>Ind</option>
              <option value='BAN'>BAN</option>
              <option value='GER'>GER</option>
              <option value='SRL'>GER</option>
              <option value='SA'>SA</option>
              <option value='PAK'>PAK</option>
            </select>
          </label>
        </form>
      </section>
    </main>
  );
};

export default Checkout;
