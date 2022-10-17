import React from "react";
import NavButton from "./NavButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      {/* Left div */}
      <div className="flex items-center space-x-2 ">
        <img className="round-full h-20 w-20" src="./lottery2.png" alt="Logo" />
        <div>
          <h1 className="text-lg text-white font-bold">Lottery Dapp</h1>
          <p className="text-xs text-emerald-500 truncate">User...</p>
        </div>
      </div>

      {/* Mid div  */}
      <div className="hidden md:flex md:col-span-3 items-center justify-center rounded-md">
        <div className="bg-[#0A1F1C] p-4 space-x-2">
          {/* Button  */}
          <NavButton isActive title="Buy Tickets" />

          {/* Button  */}
          <NavButton title="Log Out" />
        </div>
      </div>

      <div className="flex flex-col ml-auto text-right">
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />
      </div>

      <span className="md:hidden">
        <NavButton title="Logout" />
      </span>
    </header>
  );
};

export default Header;
