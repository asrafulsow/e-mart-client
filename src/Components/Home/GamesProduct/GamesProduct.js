import React, { useEffect, useState } from "react";
import FlashSingleProduct from "../FlashSingleProduct/FlashSingleProduct";
import coverProduct from "../../../imagess/coverProduct.png";
// import productMobile from "../../../imagess/mobile-product.png";
// import productMobile1 from "../../../imagess/mobile-product1.png";
// import productMobile2 from "../../../imagess/mobile-product2.png";
// import productMobile3 from "../../../imagess/mobile-product3.png";
// import productMobile4 from "../../../imagess/mobile-product4.png";
// import productMobile5 from "../../../imagess/mobile-product5.png";
// import productMobile6 from "../../../imagess/mobile-product6.png";
// import productMobile7 from "../../../imagess/mobile-product7.png";
import axios from "axios";

const GamesProduct = () => {
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
          <h2 className="font-bold text-xl">Smartphone & Tablet</h2>
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
              <img className="h-[820px]" src={coverProduct} alt="" />
            </div>
            <div className="col-span-4">
              <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                {products
                  ?.filter(
                    (product) =>
                      product.category === "laptop" ||
                      product.category === "phone"
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

export default GamesProduct;
