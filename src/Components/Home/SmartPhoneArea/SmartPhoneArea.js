import React, { useEffect, useState } from "react";
import coverProduct from "../../../imagess/coverProduct.png";
import FlashSingleProduct from "../FlashSingleProduct/FlashSingleProduct";
import axios from "axios";
import { Link } from "react-router-dom";
const SmartPhoneArea = () => {
  const mobileItemList = [
    "Iphone",
    "Samsung",
    "Vivo",
    "Oppo",
    "OnePlus",
    "Hauwei",
    "Mobile Charger",
    "Mobile Case",
    "Tablet",
    "Tumpart Glass",
  ];
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://emart-xcpi.onrender.com/products`)
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <div>
      <div className="smartphone-area w-11/12 mx-auto pb-10">
        {/* Smart phone section Top content area */}
        <div className="top-content-smartphones flex items-center justify-between pb-10 space-x-5">
          <h2 className="font-bold md:text-xl text-base">Smartphone & Tablet</h2>
          <div className="button-area space-x-2">
            <button className="btn btn-xs bg-white text-black hover:bg-slate-900 hover:text-white"
            >
              New 2023
            </button>
            <button className="btn btn-xs hover:bg-slate-900 hover:text-white">
              Best Seller
            </button>
            <button className="btn btn-xs bg-white text-black hover:bg-slate-900 hover:text-white">
              Top Rated
            </button>
          </div>
        </div>
        {/* smart phone section bottom product area */}
        <div className="bottom-product-area">
          <div className="grid md:grid-cols-6 gap-1 md:gap-4">
            <div className="md:row-span-2 hidden md:block	">
              <img className="md:h-[820px]" src={coverProduct} alt="" />
            </div>
            <div className="col-span-4">
              <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                {products
                  ?.filter((product) => product.category === "phone")
                  .map((product) => (
                    <FlashSingleProduct product={product} key={product?._id} />
                  ))}
              </div>
            </div>
            <Link to="/shop">
              <div className=" p-5 hidden md:block">
                {mobileItemList.map((itemList) => (
                  <p
                    key={itemList}
                    className="p-2 cursor-pointer hover:text-red-600 font-medium text-gray-700"
                  >
                    {itemList}
                  </p>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartPhoneArea;
