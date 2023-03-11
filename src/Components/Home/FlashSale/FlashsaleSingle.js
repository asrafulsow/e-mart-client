import React, { useState, useEffect } from "react";
import FlashSingleProduct from "../FlashSingleProduct/FlashSingleProduct";
import axios from "axios";

const FlashSaleSingle = () => {



  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://emart-xcpi.onrender.com/products`)
      .then((res) => setProducts(res.data));
  }, []);
  console.log(products, 'from flashsale')
  return (
    <div>
      <div className="flashsale-area w-11/12 mx-auto pb-10">
        <div className="top-content-flashsale inline-flex pb-10 space-x-5">


          {/* count-down start */}

        </div>
        {/* single Flash Product */}
        <div className="single_Flash_Prouct-area">
          <div className="grid grid-cols-5 gap-4">
            {products
              ?.filter(
                (product) =>
                  product.category === "camera" ||
                  product.category === "headphone"
              )
              .map((product) => (
                <FlashSingleProduct product={product} key={product?._id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleSingle;
