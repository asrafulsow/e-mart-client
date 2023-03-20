import { faFaceSmile, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuickView from "../QuickView/QuickView";
import Ratting from "../Ratting/Ratting";
import "./FlashSingleProduct.css";

const FlashSingleProduct = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [view, setView] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  //  console.log(product)
  return (

    <div
      className="flex flex-col justify-center p-4  border"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <QuickView view={view} setView={setView}></QuickView>
      <Link to={`/home/${product._id}`}>
        <div className="imgi">
          <img
            className={`w-64 h-[200px] object-cover  rounded-lg transition-all duration-300 transform ${isHovered ? "scale-110" : ""
              }   ${isHovered ? "bg-red-200" : ""}`}
            src={product?.image}
            alt="Product"
          />
          {
            isHovered ? <div className="hoverfont">
              {" "}
              <a href="/about" className="iconone"><FontAwesomeIcon

                icon={faFileAlt}
              ></FontAwesomeIcon></a>{" "}
              <p className="compare"> <button> Compare</button></p>
              <br />
              <a href="/contact" className="icontwo">   <FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon></a>
              <p className="wishlist">wishlist</p>
            </div> : ''
          }
        </div>
      </Link>

      <h3 className="text-base font-medium mt-4 mb-2">
        Simple Mobile 4G LTE Prepaid Smartphone
      </h3>
      <Ratting />
      <p className="mt-2">
        <del className="text-gray-300">$150.00</del>
        <span className="text-red-600"> $129.00</span>
      </p>
      <div className="cart-footer space-x-2">
        <Link to={`/home/${product._id}`}>
          <span className="cursor-pointer text-xs font-bold hover:underline border">
            ADD TO CART
          </span>
        </Link>
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
