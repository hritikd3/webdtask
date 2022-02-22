import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";

// Product details part contains the heading , description, and review stars
const ProductDetails = () => {
  return (
    <>
    <div className="container">
      <h1>Everyday rinse and reload</h1>
      <p>
      Achieve your dream skin goal with this complete package of skincare products that will rejuvenate your day.
      </p>
      <div className="flex align-center my-1 wrap">
        <div className="stars flex align-center">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </div>
        <span className="text-bold" style={{ margin: "0 1em" }}>
          4.5
        </span>
        <a href="/#" className="flex align-center text-muted text-bold">
          <small className="">Click to read reviews</small> <FaAngleRight />
        </a>
      </div>
      <div className="flex price">
        <h1>₹899</h1>{" "}
        <h1 className="text-muted">
          <del>₹1299</del>
        </h1>
      </div>
    </div>
    </>
  );
};


export default ProductDetails;
