import React, { useEffect, useState } from "react";
import coverProduct1 from "../../../imagess/coverProduct1.png";
import FlashSingleProduct from "../FlashSingleProduct/FlashSingleProduct";
// import homeProduct from "../../../imagess/home-product.png";
// import homeProduct1 from "../../../imagess/home-product1.png";
// import homeProduct2 from "../../../imagess/home-product2.png";
// import homeProduct3 from "../../../imagess/home-product3.png";
// import homeProduct4 from "../../../imagess/home-product4.png";
// import homeProduct5 from "../../../imagess/home-product5.png";
// import homeProduct6 from "../../../imagess/home-product6.png";
// import homeProduct7 from "../../../imagess/home-product7.png";
import axios from "axios";

const HomeAppliances = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://emart-xcpi.onrender.com/products`)
      .then((res) => setProducts(res.data));
  }, []);
  const mobileItemList = [
    "Camera",
    "Leans",
    "Ac",
    "Powre Bank",
    "Monitor",
    "Office Accorise",
    "Projector",
    "Headphone",
    "Webcam",
    "Fridge",
  ];
  return (
    <div>
      <div className="smartphone-area w-11/12 mx-auto pb-10">
        {/* Smart phone section Top content area */}
        <div className="top-content-smartphones flex items-center justify-between pb-10 space-x-5">
          <h2 className="font-bold text-xl">Home Appliances</h2>
          <div className="button-area space-x-2">
            <button className="btn btn-xs bg-white text-black hover:bg-slate-900 hover:text-white">
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
            <div className="md:row-span-2 hidden md:block">
              <img
                className="md:h-[820px]"
                src={coverProduct1}
                alt="Cover Product"
              />
            </div>
            <div className="col-span-4">
              <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                {products
                  ?.filter(
                    (product) =>
                      product.category === "oven" ||
                      product.category === "camera"
                  )
                  .map((product) => (
                    <FlashSingleProduct product={product} key={product?._id} />
                  ))}
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAppliances;
