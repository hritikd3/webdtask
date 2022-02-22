import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const AddCartButton = () => {
  return (
    <div className="container">
      <button className="flex justify-center align-center">
        <AiOutlineShoppingCart /> add to cart
      </button>
    </div>
  );
};
export default AddCartButton;
