import React, { useState } from "react";

export default function Header({ state }) {
  // mobile nav functionality
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavOpen = () => {
    setIsNavOpen(true);
  };
  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      <div className="flex items-center justify-between px-4 md:px-0 md:justify-center md:gap-96 py-3 border-b">
        <div className="flex gap-10 items-center">
          <div className="flex items-center gap-4">
            <span
              onClick={handleNavOpen}
              className="md:hidden cursor-pointer p-1"
            >
              <img src="assets/icons/icon-menu.svg" alt="menu" />
            </span>
            <span>
              <img className="md:w-52" src="assets/icons/logo.svg" alt="logo" />
            </span>
          </div>
          <nav
            className={`absolute h-full w-full max-md:bg-[#00000066] md:static z-10 md:z-0 transition-all duration-500 top-0 ${
              !isNavOpen ? "-left-[1000px]" : "left-0"
            } md:flex`}
          >
            <div className="h-full w-60 max-md:bg-white">
              <div onClick={handleNavClose} className="md:hidden p-4">
                <img
                  className="w-5 cursor-pointer"
                  src="assets/icons/icon-close.svg"
                  alt="close"
                />
              </div>
              <ul className="max-md:flex-col flex max-md:p-3 gap-7 pt-2">
                <li className="nav-link">Collections</li>
                <li className="nav-link">Men</li>
                <li className="nav-link">Women</li>
                <li className="nav-link">About</li>
                <li className="nav-link">Contact</li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex items-center cursor-pointer gap-4 md:gap-8">
          <div className="relative">
            {state.cartItems > 0 ? <div className="absolute bg-orange px-[6px] -top-4 -right-3 text-sm text-white rounded-full">{state.cart}</div> : null}
            <img src="assets/icons/icon-cart.svg" alt="cart" />
          </div>
          <div className="w-10 md:w-14">
            <img
              className=" w-full"
              src="assets/images/image-avatar.png"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
