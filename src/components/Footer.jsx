import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='absolute bottom-[-50px]  w-full text-center text-stone-500'>
      <p className='flex justify-center gap-3 items-center whitespace-nowrap max-md:text-[14px]'>
        ©BOATS 2024 | All rights reserved <FaFacebookSquare />
        <FaInstagram />
      </p>
    </div>
  );
};

export default Footer;
