import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex h-20 w-full items-center border-b-2 border-yellow-500 bg-blue-500">
      <img className="ml-8 h-full" alt="logo" src={Logo} />
      <p className="ml-5 text-xl text-white">CITZ-IMB Code Challenge</p>
    </nav>
  );
};

export default Navbar;
