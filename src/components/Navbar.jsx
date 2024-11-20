import React, { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="flex justify-between items-center mx-auto max-w-[1240px] h-24 text-white">
      <h1 className=" flex text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
        REACT.
      </h1>
      {/*velke obrazovky*/}
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      {/*male obrazovky*/}
      <div className="block md:hidden m-4" onClick={handleClick}>
        {click ? (
          <AiOutlineClose className="text-white" />
        ) : (
          <AiOutlineMenu className="text-white" />
        )}
      </div>
      <div
        className={
          !click
            ? "fixed left-[-100%]"
            : "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-out duration-500"
        }
      >
        <h1 className=" flex text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200-200 bg-clip-text text-transparent m-4">
          REACT.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
