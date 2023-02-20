import React, { useState } from "react";
import QuickView from "../QuickView/QuickView";
import Ratting from "../Ratting/Ratting";

const FlashSingleProduct = ({ product }) => {
  // console.log(product?.price);
  const [isHovered, setIsHovered] = useState(false);
  const [view, setView] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  //   const { image } = product;
  //   let image;
  return (
    <div
      className="flex flex-col justify-center p-4 border"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <QuickView view={view} setView={setView}></QuickView>
      <img
        className={`w-64 h-[200px] object-cover rounded-lg transition-all duration-300 transform ${isHovered ? "scale-110" : ""
          }`}
        src={product?.image}
        alt="Product"
      />
      <h3 className="text-base font-medium mt-4 mb-2">
        Simple Mobile 4G LTE Prepaid Smartphone
      </h3>
      <Ratting />
      <p className="mt-2">
        <del className="text-gray-300">$150.00</del>
        <span className="text-red-600"> $129.00</span>
      </p>
      <div className="cart-footer space-x-2">
        <span className="cursor-pointer text-xs font-bold hover:underline border">
          ADD TO CART
        </span>
        <span
          onClick={() => setView(true)}
          className="cursor-pointer text-xs font-bold hover:underline border"
        >
          QUICK VIEW
        </span>
      </div>
    </div>
  );
};

export default FlashSingleProduct;
