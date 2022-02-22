import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

// the header component contains the code for navbar. (FaBars and cart)

const Header = () => {
  return (
    <>
      <header>
        <nav className="container flex justify-between align-center">
          <FaBars />
          <AiOutlineShoppingCart />
        </nav>
      </header>
    </>
  );
};
export default Header;
